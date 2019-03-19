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
    ref: (element: HTMLElement) => void
  ) => React.ReactNode
  /**
   * Content that will be placed inside the Modal
   * @required
   */
  content: React.ReactNode
  /**
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

export interface ManagedHoverModalProps extends ManagedModalProps {
  setSurfaceRef: (ref: null | HTMLElement) => void
  onMouseOut: (event: React.MouseEvent) => void
}

export interface ModalManagerState {
  isOpen: boolean
}

export abstract class ModalHoverManager<
  T extends ModalHoverManagerProps
> extends React.Component<T, ModalManagerState> {
  // protected triggerRef: React.RefObject<HTMLElement>
  protected surfaceRef: null | HTMLElement
  protected triggerRef: null | HTMLElement

  constructor(props: T) {
    super(props)
    this.state = { isOpen: false }
    this.surfaceRef = null
    this.triggerRef = null

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.setTriggerRef = this.setTriggerRef.bind(this)
    this.setSurfaceRef = this.setSurfaceRef.bind(this)
  }

  public setTriggerRef = (ref: HTMLElement) => {
    this.triggerRef = ref
  }

  public setSurfaceRef = (ref: null | HTMLElement) => {
    this.surfaceRef = ref
  }

  public componentDidMount() {
    if (this.props.isOpen) {
      this.setState({ isOpen: true })
    }
  }

  public render() {
    const { content, children, ...otherProps } = this.props

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
        {this.renderModal(content, modalProps)}
        {this.props.children(eventHandlers, this.setTriggerRef)}
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

  protected abstract renderModal(
    content: React.ReactNode,
    props: ManagedHoverModalProps
  ): React.ReactNode

  private handleMouseOut = (event: React.MouseEvent) => {
    if (!this.state.isOpen) return

    const related = event.relatedTarget

    if (
      this.triggerRef &&
      (this.triggerRef === related || this.triggerRef.contains(related as Node))
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
