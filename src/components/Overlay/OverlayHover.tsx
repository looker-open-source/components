import * as React from 'react'
import { Popper } from 'react-popper'
import { ModalContext } from '../Modal'
import { OverlayProps, OverlayState } from './Overlay'
import { OverlayTrigger } from './OverlayTrigger'

export class OverlayHover extends React.Component<OverlayProps, OverlayState> {
  public static defaultProps: OverlayProps = { open: false, render: () => null }

  private surfaceRef: HTMLElement | null
  private triggerRef: React.RefObject<HTMLDivElement>

  constructor(props: OverlayProps) {
    super(props)
    this.state = { isOpen: !!props.open }
    this.surfaceRef = null
    this.triggerRef = React.createRef()
  }

  public render() {
    const surfaceEventHandlers: React.DOMAttributes<{}> = {
      onMouseOut: this.handleMouseOut,
      onMouseOver: this.open,
    }

    const triggerEventHandlers: React.DOMAttributes<{}> = {
      ...surfaceEventHandlers,
      onBlur: this.close,
      onFocus: this.open,
    }

    const surface = this.state.isOpen && (
      <Popper
        positionFixed
        innerRef={this.setSurfaceRef}
        placement={this.props.placement}
        referenceElement={
          this.triggerRef.current ? this.triggerRef.current : undefined
        }
      >
        {({ ref, style, arrowProps, placement }) =>
          this.props.render({
            arrowProps,
            eventHandlers: surfaceEventHandlers,
            placement,
            ref,
            style,
          })
        }
      </Popper>
    )

    return (
      <ModalContext.Provider value={{ closeModal: this.close }}>
        <OverlayTrigger
          isOpen={this.state.isOpen}
          ref={this.triggerRef}
          eventHandlers={triggerEventHandlers}
        >
          {this.props.children}
        </OverlayTrigger>
        {surface}
      </ModalContext.Provider>
    )
  }

  private setSurfaceRef = (ref: null | HTMLElement) => (this.surfaceRef = ref)

  private close = () => this.setState({ isOpen: false })
  private open = () => this.setState({ isOpen: true })

  private handleMouseOut = (e: React.MouseEvent) => {
    if (!this.state.isOpen) return

    const related = e.relatedTarget

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
