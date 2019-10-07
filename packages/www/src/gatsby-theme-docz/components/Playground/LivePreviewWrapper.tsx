import React from 'react'
import styled from 'styled-components'

interface LivePreviewWrapper {
  showingCode?: boolean
}

export const LivePreviewWrapper: React.FC<LivePreviewWrapper> = ({
  children,
  // showingCode,
}) => {
  return <Iframe>{children}</Iframe>
}

const Iframe = styled.iframe`
  height: auto;
  display: block;
  min-height: 100%;
  width: calc(100% - 2px);
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${props => props.theme.colors.palette.charcoal200};
`
