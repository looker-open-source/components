import { resetComponent as styled } from '../../../reset_component'
import { charcoal800 } from '../../../styles/colors'

export const Label = styled<{}, 'label'>('label')`
  font-weight: 600;
  color: ${charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[5]};
`
