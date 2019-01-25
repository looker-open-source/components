import * as React from 'react'
import ReactResizeDetector from 'react-resize-detector'

import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

export interface ModalContentProps extends BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode
}

interface ContentState {
  overflow: boolean
}

interface InternalContentProps extends ModalContentProps {
  renderedHeight: string
}

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
    const { children, renderedHeight, ...props } = this.props

    return (
      <ContentContainer
        overflow="scroll"
        className={`${props.className && props.className} ${this.state
          .overflow && 'overflow'}`}
        innerRef={this.ref}
        flex="8"
        {...props}
      >
        <Box m="large">{children}</Box>
      </ContentContainer>
    )
  }
}

export const ModalContent: React.SFC<ModalContentProps> = props => {
  return (
    <ReactResizeDetector handleHeight>
      {(height: string) => <Internal renderedHeight={height} {...props} />}
    </ReactResizeDetector>
  )
}

const ContentContainer = styled(Box)`
  border-top: 1px solid transparent;

  &.overflow {
    border-top-color: ${props => props.theme.colors.palette.charcoal200};
    box-shadow: inset 0 -16px 16px -16px
      ${props => props.theme.colors.palette.charcoal200};
  }
`
