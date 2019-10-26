import { Heading, HeadingProps } from 'looker-lens'
import React, { FC, ReactNode } from 'react'
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

export const h1: FC = ({ children }) => (
  <StyledHeading as="h1" fontSize="xxlarge" fontWeight="light">
    {children}
  </StyledHeading>
)
export const h2: FC = ({ children }) => (
  <StyledHeading as="h2">{children}</StyledHeading>
)
export const h3: FC = ({ children }) => (
  <StyledHeading as="h3">{children}</StyledHeading>
)
export const h4: FC = ({ children }) => (
  <StyledHeading as="h4">{children}</StyledHeading>
)
export const h5: FC = ({ children }) => (
  <StyledHeading as="h5">{children}</StyledHeading>
)
export const h6: FC = ({ children }) => (
  <StyledHeading as="h6">{children}</StyledHeading>
)
