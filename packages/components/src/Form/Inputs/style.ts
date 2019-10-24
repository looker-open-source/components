import { SemanticColor } from 'looker-design-tokens'
import { css } from 'styled-components'
import { CheckboxRadioContainerProps } from './InputProps'

export function inputColor({ branded }: CheckboxRadioContainerProps) {
  const color: keyof SemanticColor = branded ? 'main' : 'linkColor'

  return css`
    background: ${props => props.theme.colors.semanticColors.primary[color]};
    border-color: ${props => props.theme.colors.semanticColors.primary[color]};
  `
}
