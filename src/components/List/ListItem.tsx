import styled from '../../styled_components'
import { reset } from '../../styles/reset'

export const ListItem = styled.li`
  ${reset};
  margin-bottom: ${p => p.theme.spacing.xs};
`
