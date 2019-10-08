import { Heading } from '@looker/components'
import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space.medium};
  line-height: ${({ theme }) => theme.lineHeights.xlarge};
  font-weight: 400;
`

export const h1: React.FC = ({ children }) => (
  <StyledHeading as="h1" fontSize="xxlarge" fontWeight="light">
    {children}
  </StyledHeading>
)
export const h2: React.FC = ({ children }) => (
  <StyledHeading as="h2">{children}</StyledHeading>
)
export const h3: React.FC = ({ children }) => (
  <StyledHeading as="h3">{children}</StyledHeading>
)
export const h4: React.FC = ({ children }) => (
  <StyledHeading as="h4">{children}</StyledHeading>
)
export const h5: React.FC = ({ children }) => (
  <StyledHeading as="h5">{children}</StyledHeading>
)
export const h6: React.FC = ({ children }) => (
  <StyledHeading as="h6">{children}</StyledHeading>
)
