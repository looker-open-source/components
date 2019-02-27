import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { BackdropStyles, ModalBackdrop } from './ModalBackdrop'
import { ModalContext } from './ModalContext'
import { ModalPortal } from './ModalPortal'

export interface ModalSurfaceStyleProps {
  animation?: string
  backgroundColor: string
  border: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
}

export interface CustomizableModalAttributes extends CustomizableAttributes {
  backdrop: BackdropStyles
  surface: ModalSurfaceStyleProps
  zIndex: number
}

export const CustomizableModalAttributes: CustomizableModalAttributes = {
  backdrop: { backgroundColor: palette.charcoal200, opacity: 0.6 },
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: 'none',
    borderColor: 'none',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal000,
  },
  zIndex: 0,
}

export interface ModalProps {
  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdropStyles?: React.CSSProperties

  /**
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   */
  surfaceStyles?: React.CSSProperties

  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose?: () => void
  /*
   * Specify a callback to be called each time this Modal is opened
   */
  onOpen?: () => void

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   */
  canClose?: () => boolean

  /**
   * When true, renders the Backdrop, Surface and it's contained content immediately.
   * @default false
   */
  open?: boolean

  /**
   * Explicitly specify width. Component surface width.
   * Specifying a width will force the surface to be the specified width or 100% of viewport width
   * whichever is less.
   */
  width?: string
}

export interface ModalInternalProps extends ModalProps {
  /**
   * To implement Modal the Surface is supplied as a function so it can consume the animationState of the Modal.
   * animationState will be null, 'exited', 'entering' or 'exiting' and can be used to set CSS class on Surface
   * element to provide CSS transitions. (See DialogSurface & DrawerSurface for implementation examples)
   */
  render: (animationState: string) => React.ReactNode
}

export interface ModalState {
  isOpen: boolean
}

export class Modal extends React.Component<ModalInternalProps, ModalState> {
  private portalRef: React.RefObject<HTMLElement>

  constructor(props: ModalInternalProps) {
    super(props)
    this.state = { isOpen: !!props.open }
    this.portalRef = React.createRef()
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress)
  }

  public render() {
    return (
      <ModalContext.Provider value={{ closeModal: this.close }}>
        <>
          {this.generateTrigger(this.props.children)}
          <CSSTransition
            classNames="modal"
            mountOnEnter
            unmountOnExit
            in={this.state.isOpen}
            timeout={{ enter: 0, exit: 250 }}
          >
            {(state: string) => (
              <ModalPortal ref={this.portalRef}>
                <ModalBackdrop
                  className={state}
                  style={this.props.backdropStyles}
                  onClick={this.close}
                />
                {this.props.render(state)}
              </ModalPortal>
            )}
          </CSSTransition>
        </>
      </ModalContext.Provider>
    )
  }

  private generateTrigger(children?: React.ReactNode) {
    if (!children) return

    const child = React.Children.only(children)
    return React.cloneElement(child, { onClick: this.open })
  }

  private open = () => {
    window.addEventListener('keydown', this.handleEscapePress)
    this.props.onOpen && this.props.onOpen()
    this.setState({ isOpen: true })
  }

  private close = (
    _event?: React.SyntheticEvent,
    doCallbacks: boolean = true
  ) => {
    if (this.props.canClose && !this.props.canClose()) return
    window.removeEventListener('keydown', this.handleEscapePress)

    if (doCallbacks && this.props.onClose) {
      this.props.onClose()
    }
    this.setState({ isOpen: false })
  }

  private handleEscapePress = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return
    if (!event.target) return
    if (
      !this.portalRef.current ||
      !this.portalRef.current.contains(event.target as Node)
    ) {
      return
    }

    this.close()
  }
}
