/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react'
import styled from 'styled-components'
import { Code, Flex, FlexItem } from '@looker/components'

interface PropsProps {
  of: string
  interfaceName?: string
}

const Props = ({ of, interfaceName = `${of}` }: PropsProps) => {
  return (
    <Layout>
      <FlexItem>
        Interface of <PropsCode>{interfaceName}</PropsCode>
      </FlexItem>
      <FlexItem ml="auto">🏗 Coming Soon</FlexItem>
    </Layout>
  )
}

const PropsCode = styled(Code).attrs({ fontSize: 'small' })`
  color: ${props => props.theme.colors.palette.purple400};
`

const Layout = styled(Flex).attrs({ py: 'small', mt: 'small', mb: 'large' })`
  border-top: 1px solid ${props => props.theme.colors.palette.charcoal200};
  border-bottom: 1px solid ${props => props.theme.colors.palette.charcoal200};
  color: ${props => props.theme.colors.palette.charcoal500};
  font-size: ${props => props.theme.fontSizes.small};
`

export default Props
