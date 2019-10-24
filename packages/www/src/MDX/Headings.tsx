import { Heading, HeadingProps } from 'looker-lens'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const generateHeadingAnchor = (children?: ReactNode) => {
  return (children as string).toLowerCase().replace(/\s/g, '-')
}

const StyledHeading = styled(Heading).attrs((props: HeadingProps) => {
  return {
    mb: 'medium',
    lineHeight: 'xlarge',
    fontWeight: 'normal',
    id: generateHeadingAnchor(props.children),
  }
})``

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
