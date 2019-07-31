import { Placement } from 'popper.js'
import * as React from 'react'
import { ManagedModalProps } from '../Modal'

export interface ModalHoverManagerProps extends ManagedModalProps {
  children: (
    eventsHandlers: {
      onBlur: () => void
      onFocus: () => void
      onMouseOut: (event: React.MouseEvent) => void
      onMouseOver: () => void
    },
    ref: React.RefObject<HTMLElement>
  ) => React.ReactNode
  /**
   * Content that will be placed inside the Modal
   * @required
   */
  content: React.ReactNode
  /**
   * Function to render the Modal. Formerly a virtual method, will be refactored into a render prop
   * @required
   */
  renderModal: (
    content: React.ReactNode,
    modalProps: ManagedHoverModalProps,
    isOpen: boolean,
    triggerRef: React.RefObject<HTMLElement>,
    onClose: () => void
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
  placement?: Placement

  isOpen?: boolean
}

// tslint:disable-next-line:class-name
export interface ManagedHoverModalProps_ {
  setSurfaceRef: (ref: HTMLElement | null) => void
  onMouseOut: (event: React.MouseEvent) => void
}

export type ManagedHoverModalProps = ManagedHoverModalProps_ & ManagedModalProps

export interface ModalManagerState {
  isOpen: boolean
}

export abstract class ModalHoverManager<
  T extends ModalHoverManagerProps
> extends React.Component<T, ModalManagerState> {
  /*
   * Popper.js doesn't support React.RefObject so instead the reference to
   * the Surface (powered by Popper) needs to be retrieved via callback
   */
  protected surfaceRef: HTMLElement | null
  protected triggerRef: React.RefObject<HTMLElement>

  constructor(props: T) {
    super(props)
    this.state = { isOpen: false }
    this.surfaceRef = null
    this.triggerRef = React.createRef()

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.setSurfaceRef = this.setSurfaceRef.bind(this)
  }

  public componentDidMount() {
    if (this.props.isOpen) this.open()
  }

  public render() {
    const { content, children, isOpen, renderModal, ...otherProps } = this.props

    const eventHandlers = {
      onBlur: this.close,
      onFocus: this.open,
      onMouseOut: this.handleMouseOut,
      onMouseOver: this.open,
    }

    const modalProps = {
      ...otherProps,
      onMouseOut: this.handleMouseOut,
      setSurfaceRef: this.setSurfaceRef,
    }

    return (
      <>
        {renderModal(
          content,
          modalProps,
          this.state.isOpen,
          this.triggerRef,
          this.close
        )}
        {this.props.children(eventHandlers, this.triggerRef)}
      </>
    )
  }

  public open() {
    this.setState({ isOpen: true })
  }

  public close() {
    if (this.props.canClose && !this.props.canClose()) return
    this.setState({ isOpen: false })
  }

  protected setSurfaceRef(ref: HTMLElement | null) {
    this.surfaceRef = ref
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
