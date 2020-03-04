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

import {
  palette,
  CompatibleHTMLProps,
  SpaceProps,
  reset,
  space,
  LayoutProps,
  layout,
} from '@looker/design-tokens'
import React, { Component, createRef, RefObject } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import styled from 'styled-components'
import omit from 'lodash/omit'

export interface ModalContentProps
  extends LayoutProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Style the scrollable space within the ModalContent.
   * Often p="none" is applied if components within the the ModalContent need to the
   * touch the container edges.
   */
  innerProps?: SpaceProps
}

interface ContentState {
  overflow: boolean
}

interface InternalContentProps extends ModalContentProps {
  renderedHeight: string
}

class Internal extends Component<InternalContentProps, ContentState> {
  private ref: RefObject<HTMLDivElement>

  constructor(props: InternalContentProps) {
    super(props)
    this.state = { overflow: false }
    this.ref = createRef()
  }

  public hasOverflow(e: HTMLDivElement) {
    return e.offsetHeight < e.scrollHeight
  }

  public componentDidUpdate(prevProps: InternalContentProps) {
    if (prevProps.renderedHeight !== this.props.renderedHeight) {
      this.ref.current &&
        this.setState({ overflow: this.hasOverflow(this.ref.current) })
    }
  }

  public render() {
    const { children, className, innerProps, ...props } = this.props

    if (innerProps && innerProps.p && !innerProps.px) {
      innerProps.px = innerProps.p
    }

    return (
      <Outer
        className={`${className} ${this.state.overflow && 'overflow'}`}
        ref={this.ref}
        {...omit(props, ['renderedHeight'])}
      >
        <Inner {...innerProps}>{children}</Inner>
      </Outer>
    )
  }
}

export const ModalContent = (props: ModalContentProps) => {
  return (
    <ReactResizeDetector handleHeight>
      {(height: string) => <Internal renderedHeight={height} {...props} />}
    </ReactResizeDetector>
  )
}

const Outer = styled.div`
  ${reset}
  ${layout}

  overflow: auto;
  flex: 8;

  &.overflow {
    box-shadow: inset 0 -16px 16px -16px ${palette.charcoal200},
      inset 0 16px 16px -16px ${palette.charcoal200};
  }
`

const Inner = styled.div<SpaceProps>`
  ${reset}
  ${space}
`

Inner.defaultProps = { px: 'xlarge', py: 'large' }
