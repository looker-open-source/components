import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { OverlayBubbleStyleProps } from '../Overlay'
import { ScrollLock } from '../ScrollLock'
import { ModalBackdrop } from './ModalBackdrop'
import { ModalContainer } from './ModalContainer'
import { ModalContext, ModalContextProps } from './ModalContext'

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
  constructor(props: ModalInternalProps) {
    super(props)
    this.state = { isOpen: !!props.open }
  }

  public render() {
    const { children } = this.props
    const triggerEventProps: React.DOMAttributes<{}> = { onClick: this.open }

    const child = children && React.Children.only(children)
    const newChildren =
      child &&
      React.cloneElement(child, {
        ...triggerEventProps,
      })

    const context: ModalContextProps = { closeModal: this.close }

    return (
      <ModalContext.Provider value={context}>
        <>
          {newChildren}
          <CSSTransition
            classNames="modal"
            mountOnEnter
            unmountOnExit
            in={this.state.isOpen}
            timeout={{ enter: 0, exit: 250 }}
          >
            {(state: string) => (
              <ModalContainer>
                <ScrollLock />
                <ModalBackdrop
                  className={state}
                  style={this.props.backdropStyles}
                />
                {this.props.render(state)}
              </ModalContainer>
            )}
          </CSSTransition>
        </>
      </ModalContext.Provider>
    )
  }

  private open = () => {
    this.props.onOpen && this.props.onOpen()
    this.setState({ isOpen: true })
  }

  private close = () => {
    if (this.props.canClose && !this.props.canClose()) return
    this.props.onClose && this.props.onClose()
    this.setState({ isOpen: false })
  }
}

export interface CustomizableModalAttributes extends CustomizableAttributes {
  zIndex: number
  surface: OverlayBubbleStyleProps
}

export const CustomizableModalAttributes: CustomizableModalAttributes = {
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
