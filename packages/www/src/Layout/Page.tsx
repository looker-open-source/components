import { GlobalStyle } from '@looker/components'
import { theme } from '@looker/design-tokens'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { ComponentDetail, StatusAndResources } from '../Shared'
import MDXComponents from '../MDX'

const all = { ...MDXComponents, ComponentDetail, StatusAndResources }

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
