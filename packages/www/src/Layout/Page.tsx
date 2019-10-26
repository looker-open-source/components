import { GlobalStyle } from 'looker-lens'
import { theme } from 'looker-design-tokens'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Props } from '../Shared'
import MDXComponents from '../MDX'

const all = { ...MDXComponents, Props }

const Page: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MDXProvider components={all}>{children}</MDXProvider>
      </>
    </ThemeProvider>
  )
}

export default Page
