import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Theme, withTheme } from '../../style'

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
   * Optionally, specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void
  /*
   * Optionally, specify a callback to be called each time this Dialog is opened
   */
  onOpen?: () => void

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

  /**
   * A Lens compatible theme object. This is passed in automatically by the
   * withTheme higher-order helper.
   */
  theme: Theme
}

export interface ModalState {
  isOpen: boolean
}

class Internal extends React.Component<ModalInternalProps, ModalState> {
  constructor(props: ModalInternalProps) {
    super(props)

    this.state = { isOpen: !!props.open }
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.handleEscapePress)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapePress)
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

    const context: ModalContextProps = { close: this.close }

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
                <ModalBackdrop
                  className={state}
                  close={this.close}
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
    document.body.style.overflow = 'hidden'
    this.props.onOpen && this.props.onOpen()
    this.setState({ isOpen: true })
  }

  private close = () => {
    document.body.style.overflow = null
    this.props.onClose && this.props.onClose()
    this.setState({ isOpen: false })
  }

  private handleEscapePress = (event: KeyboardEvent) => {
    if (this.state.isOpen && event.key === 'Escape') this.close()
  }
}

export const Modal = withTheme(Internal)
