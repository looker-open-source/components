import { GlobalStyle } from 'looker-lens'
import { theme } from 'looker-design-tokens'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Props } from '../Shared'
import MDXComponents from '../MDX'

const all = { ...MDXComponents, Props }

const Page: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <MDXProvider components={all}>{children}</MDXProvider>
      </Fragment>
    </ThemeProvider>
  )
}

export default Page
