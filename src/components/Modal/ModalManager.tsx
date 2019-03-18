import * as React from 'react'
import { ManagedModalProps } from '../Modal'

export interface ModalManagerProps extends ManagedModalProps {
  children: (
    onClick: () => void,
    ref: React.RefObject<HTMLElement>
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
}

export interface ModalManagerState {
  isOpen: boolean
}

export abstract class ModalManager extends React.Component<
  ModalManagerProps,
  ModalManagerState
> {
  private triggerRef: React.RefObject<HTMLElement>

  constructor(props: ModalManagerProps) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = React.createRef()

    this.close = this.close.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  public render() {
    const { content, children, ...modalProps } = this.props

    return (
      <>
        {this.renderModal(content, modalProps)}
        {this.props.children(this.onClick, this.triggerRef)}
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
