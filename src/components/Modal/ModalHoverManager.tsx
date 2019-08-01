import { Placement } from 'popper.js'
import * as React from 'react'
import { PopperProps } from 'react-popper'
import { ManagedModalProps } from '../Modal'

export interface ManagedHoverModalProps {
  setSurfaceRef: NonNullable<PopperProps['innerRef']>
  onMouseOut: (event: React.MouseEvent) => void
}

export interface ModalHoverManagerProps extends ManagedModalProps {
  /**
   * Render Prop to render the Modal.
   * @required
   */
  children: (
    modalProps: ManagedHoverModalProps & ManagedModalProps,
    isOpen: ModalHoverManagerProps['isOpen'],
    triggerRef: React.RefObject<HTMLElement>,
    close: ModalHoverManager['close']
  ) => React.ReactNode
  /*
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  isOpen?: boolean
  placement?: Placement
  /**
   * Component to wrap. The ModalHoverManager HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the modal renderProp.
   */
  wrappedComponent: (
    eventsHandlers: {
      onBlur: () => void
      onFocus: () => void
      onMouseOut: (event: React.MouseEvent) => void
      onMouseOver: () => void
    },
    ref: React.RefObject<HTMLElement>
  ) => React.ReactNode
}

export interface ModalManagerState {
  isOpen: boolean
}

export class ModalHoverManager extends React.Component<
  ModalHoverManagerProps,
  ModalManagerState
> {
  /*
   * Popper.js doesn't support React.RefObject so instead the reference to
   * the Surface (powered by Popper) needs to be retrieved via callback
   */
  private surfaceRef: HTMLElement | null
  private triggerRef: React.RefObject<HTMLElement>

  constructor(props: ModalHoverManagerProps) {
    super(props)
    this.state = { isOpen: false }
    this.surfaceRef = null
    this.triggerRef = React.createRef()

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  public componentDidMount() {
    if (this.props.isOpen) this.open()
  }

  public render() {
    const { children, isOpen, wrappedComponent, ...otherProps } = this.props

    const eventHandlers = {
      onBlur: this.close,
      onFocus: this.open,
      onMouseOut: this.handleMouseOut,
      onMouseOver: this.open,
    }

    const modalProps = {
      ...otherProps,
      onMouseOut: this.handleMouseOut,
      setSurfaceRef: (ref: HTMLElement | null) => {
        this.surfaceRef = ref
      },
    }

    return (
      <>
        {children(modalProps, this.state.isOpen, this.triggerRef, this.close)}
        {this.props.wrappedComponent(eventHandlers, this.triggerRef)}
      </>
    )
  }

  private open() {
    this.setState({ isOpen: true })
  }

  private close() {
    if (this.props.canClose && !this.props.canClose()) return
    this.setState({ isOpen: false })
  }

  private handleMouseOut = (event: React.MouseEvent) => {
    if (!this.state.isOpen) return

    const related = event.relatedTarget

    if (
      this.triggerRef.current &&
      (this.triggerRef.current === related ||
        this.triggerRef.current.contains(related as Node))
    ) {
      return
    }

    if (
      this.surfaceRef &&
      (this.surfaceRef === related || this.surfaceRef.contains(related as Node))
    ) {
      return
    }

    this.close()
  }
}
