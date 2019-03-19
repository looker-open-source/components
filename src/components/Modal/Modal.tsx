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

export interface ManagedModalProps {
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
   * Explicitly specifying a width will set the Surface to be the lesser of the specified width or the viewport width.
   * You can also specify `auto` if you want the Surface to auto-size to its content.
   * @default auto
   */
  width?: string
}

export interface ModalProps extends ManagedModalProps {
  /**
   * When true, renders the Backdrop, Surface and it's contained content immediately.
   * @default false
   */
  isOpen: boolean
  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose: () => void
}

export interface ModalInternalProps extends ModalProps {
  /**
   * To implement Modal the Surface is supplied as a function so it can consume the animationState of the Modal.
   * animationState will be null, 'exited', 'entering' or 'exiting' and can be used to set CSS class on Surface
   * element to provide CSS transitions. (See DialogSurface & DrawerSurface for implementation examples)
   */
  render: (animationState: string) => React.ReactNode
}

export class Modal extends React.Component<ModalInternalProps> {
  private portalRef: React.RefObject<HTMLElement>

  constructor(props: ModalInternalProps) {
    super(props)
    this.portalRef = React.createRef()
  }

  public componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress)
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress)
  }

  public render() {
    return (
      <ModalContext.Provider value={{ closeModal: this.props.onClose }}>
        <CSSTransition
          classNames="modal"
          mountOnEnter
          unmountOnExit
          in={this.props.isOpen}
          timeout={{ enter: 0, exit: 250 }}
        >
          {(state: string) => (
            <ModalPortal ref={this.portalRef}>
              <ModalBackdrop
                className={state}
                style={this.props.backdropStyles}
                onClick={this.props.onClose}
              />
              {this.props.render(state)}
            </ModalPortal>
          )}
        </CSSTransition>
      </ModalContext.Provider>
    )
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

    this.props.onClose && this.props.onClose()
  }
}
