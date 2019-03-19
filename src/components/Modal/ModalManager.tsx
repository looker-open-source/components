import { Placement } from 'popper.js'
import * as React from 'react'
import { ManagedModalProps } from '../Modal'

export interface ModalManagerProps extends ManagedModalProps {
  children: (
    onClick: () => void,
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

export interface ModalManagerState {
  isOpen: boolean
}

export abstract class ModalManager<
  T extends ModalManagerProps
> extends React.Component<T, ModalManagerState> {
  // protected triggerRef: React.RefObject<HTMLElement>
  protected triggerRef: null | HTMLElement

  constructor(props: T) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = null

    this.close = this.close.bind(this)
    this.onClick = this.onClick.bind(this)
    this.setTriggerRef = this.setTriggerRef.bind(this)
  }

  public setTriggerRef = (element: HTMLElement) => {
    this.triggerRef = element
  }

  public componentDidMount() {
    if (this.props.isOpen) {
      this.setState({ isOpen: true })
    }
  }

  public render() {
    const { content, children, ...modalProps } = this.props

    return (
      <>
        {this.renderModal(content, modalProps)}
        {this.props.children(this.onClick, this.setTriggerRef)}
      </>
    )
  }

  public close() {
    if (this.props.canClose && !this.props.canClose()) return
    this.setState({ isOpen: false })
  }

  public onClick() {
    this.setState({ isOpen: true })
  }

  protected abstract renderModal(
    content: React.ReactNode,
    props: ManagedModalProps
  ): React.ReactNode
}
