import { resetComponent as styled } from '../../../reset_component'
import { charcoal800 } from '../../../styles/colors'

//
// @TODO - JSX.IntrinsicElements is missing `label` which causes this to break if used with correct
// 			 syntax: `styled.label`. With updated reset perhaps this workaround will no longer
// 			be needed.
//

export const Label = styled('label')`
  font-weight: 600;
  color: ${charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[5]};
`
