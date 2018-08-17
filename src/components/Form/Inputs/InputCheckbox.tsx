import { resetComponent as styled } from '../../../reset_component'

export const InputCheckbox = styled<{}, 'input'>('input', { type: 'checkbox' })`
  padding: 0 ${props => props.theme.spacing.s};
`
