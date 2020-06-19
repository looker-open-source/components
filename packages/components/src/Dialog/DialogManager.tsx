/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { Placement } from '@popperjs/core'
import React, {
  Component,
  createRef,
  ReactNode,
  RefObject,
  SyntheticEvent,
} from 'react'
import { Dialog, ManagedDialogProps } from './Dialog'

type DialogManagerRenderProp = (
  onClick: () => void,
  ref: RefObject<any>
) => ReactNode

export interface DialogManagerProps extends ManagedDialogProps {
  children?: DialogManagerRenderProp
  /**
   * Content that will be placed inside the Dialog
   * @required
   */
  content: ReactNode
  /**
   * Specify a callback to be called before trying to close the Dialog. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Dialog is closed
   */
  canClose?: () => boolean
  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popper.js. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
  isOpen?: boolean
  /**
   * The onClick event applied to the trigger will automatically stop the event
   * from being propagated further up into the DOM. This is most frequently used when
   * and Popover is placed inside another, larger clickable item.
   */
  stopPropagation?: boolean
}

export interface DialogManagerState {
  isOpen: boolean
}

export class DialogManager extends Component<
  DialogManagerProps,
  DialogManagerState
> {
  protected triggerRef: RefObject<any>

  constructor(props: DialogManagerProps) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = createRef()
  }

  public componentDidMount() {
    if (this.props.isOpen) this.open()
  }

  public render() {
    const { content, children, ...otherProps } = this.props

    return (
      <>
        <Dialog isOpen={this.state.isOpen} onClose={this.close} {...otherProps}>
          {content}
        </Dialog>
        {children && children(this.open, this.triggerRef)}
      </>
    )
  }

  public open = (event?: SyntheticEvent) => {
    if (event && this.props.stopPropagation) {
      event.stopPropagation()

      const nativeEvent = event.nativeEvent
      nativeEvent.preventDefault && nativeEvent.preventDefault()
      nativeEvent.stopImmediatePropagation &&
        nativeEvent.stopImmediatePropagation()
    }

    this.setState({ isOpen: true })
  }

  public close = () => {
    if (this.props.canClose && !this.props.canClose()) return
    this.props.onClose && this.props.onClose()
    this.setState({ isOpen: false })
  }
}
