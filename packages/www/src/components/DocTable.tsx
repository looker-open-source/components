import styled from 'styled-components'
import { Code, Table } from '@looker/components'

const DocTable = styled(Table)`
  margin-bottom: 2rem;
  font-size: ${props => props.theme.fontSizes.small};

  ${Code} {
    color: ${props => props.theme.colors.palette.purple400};
  }
`

export default DocTable
