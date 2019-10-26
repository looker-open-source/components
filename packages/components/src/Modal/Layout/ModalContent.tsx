import {
  palette,
  CompatibleHTMLProps,
  SpaceProps,
  reset,
  space,
  LayoutProps,
  layout,
} from 'looker-design-tokens'
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

Inner.defaultProps = { p: 'large', px: 'xlarge' }
