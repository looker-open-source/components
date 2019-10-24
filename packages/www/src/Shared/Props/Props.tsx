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
