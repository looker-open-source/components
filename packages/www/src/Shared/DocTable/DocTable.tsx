import styled from 'styled-components'
import { Code, Table } from 'looker-lens'

const DocTable = styled(Table)`
  margin-bottom: ${props => props.theme.space.xlarge};
  font-size: ${props => props.theme.fontSizes.small};

  ${Code} {
    color: ${props => props.theme.colors.palette.purple400};
  }
`

export default DocTable
