import { Heading } from '@looker/components'
import React from 'react'

export const h1: React.FC = ({ children }) => (
  <Heading as="h1" fontSize="xxlarge" fontWeight="light">
    {children}
  </Heading>
)
export const h2: React.FC = ({ children }) => (
  <Heading as="h2">{children}</Heading>
)
export const h3: React.FC = ({ children }) => (
  <Heading as="h3">{children}</Heading>
)
export const h4: React.FC = ({ children }) => (
  <Heading as="h4">{children}</Heading>
)
export const h5: React.FC = ({ children }) => (
  <Heading as="h5">{children}</Heading>
)
export const h6: React.FC = ({ children }) => (
  <Heading as="h6">{children}</Heading>
)
