import React, { FunctionComponent } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import styled, { StyledComponent } from 'styled-components'
import { palette } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Box'

export interface ModalContentProps extends BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode
  /**
   * Style the scrollable space within the ModalContent.
   * Often p="none" is applied if componennts within the the ModalContent need to the
   * touch the container edges.
   */
  innerProps?: BoxProps<HTMLDivElement>
}

interface ContentState {
  overflow: boolean
}

interface InternalContentProps extends ModalContentProps {
  renderedHeight: string
}

export type ModalContentComponentType = FunctionComponent<ModalContentProps>
export type StyledModalContentComponentType = StyledComponent<
  ModalContentComponentType,
  ModalContentProps
>

class Internal extends React.Component<InternalContentProps, ContentState> {
  private ref: React.RefObject<HTMLDivElement>

  constructor(props: InternalContentProps) {
    super(props)
    this.state = { overflow: false }
    this.ref = React.createRef()
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
    const { children, renderedHeight, innerProps, ...props } = this.props

    if (innerProps && innerProps.p && !innerProps.px) {
      innerProps.px = innerProps.p
    }

    return (
      <ContentContainer
        overflow="auto"
        className={`${props.className && props.className} ${this.state
          .overflow && 'overflow'}`}
        ref={this.ref}
        flex="8"
        {...props}
      >
        <Box p="large" px="xlarge" {...innerProps}>
          {children}
        </Box>
      </ContentContainer>
    )
  }
}

export const ModalContent: ModalContentComponentType = props => {
  return (
    <ReactResizeDetector handleHeight>
      {(height: string) => <Internal renderedHeight={height} {...props} />}
    </ReactResizeDetector>
  )
}

const ContentContainer = styled(Box)`
  &.overflow {
    box-shadow: inset 0 -16px 16px -16px ${palette.charcoal200},
      inset 0 16px 16px -16px ${palette.charcoal200};
  }
`
