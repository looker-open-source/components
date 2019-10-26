import { Placement } from 'popper.js'
import React, { Component, RefObject, ReactNode } from 'react'
import { ManagedModalProps } from '../Modal'

export interface ModalManagerProps extends ManagedModalProps {
  children: (onClick: () => void, ref: RefObject<any>) => ReactNode
  /**
   * Content that will be placed inside the Modal
   * @required
   */
  content: ReactNode
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
  /**
   * The onClick event applied to the trigger will automatically stop the event
   * from being propogated further up into the DOM. This is most frequently used when
   * and Popover is placed inside another, larger clickable item.
   */
  stopPropagation?: boolean
}

export interface ModalManagerState {
  isOpen: boolean
}

export abstract class ModalManager extends Component<
  ModalManagerProps,
  ModalManagerState
> {
  protected portalRef: React.RefObject<HTMLDivElement>
  protected triggerRef: React.RefObject<any>

  constructor(props: ModalManagerProps) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = React.createRef()
    this.portalRef = React.createRef()

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  public componentDidMount() {
    if (this.props.isOpen) this.open()
  }

  public render() {
    const { content, children, ...otherProps } = this.props

    const modalProps = {
      ...otherProps,
      portalRef: this.portalRef,
    }

    return (
      <>
        {this.renderModal(content, modalProps)}
        {children(this.open, this.triggerRef)}
      </>
    )
  }

  public open(event?: React.SyntheticEvent) {
    if (event && this.props.stopPropagation) {
      event.stopPropagation()

      const nativeEvent = event.nativeEvent
      nativeEvent.preventDefault && nativeEvent.preventDefault()
      nativeEvent.stopImmediatePropagation &&
        nativeEvent.stopImmediatePropagation()
    }

    this.setState({ isOpen: true })
  }

  public close() {
    if (this.props.canClose && !this.props.canClose()) return
    this.setState({ isOpen: false })
  }

  protected abstract renderModal(
    content: React.ReactNode,
    props: ManagedModalProps
  ): React.ReactNode
}
