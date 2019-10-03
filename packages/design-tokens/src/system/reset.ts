import { css, InterpolationValue } from 'styled-components'

export const defaultReset = () => {
  const simpleReset: InterpolationValue = {
    border: 0,
    boxSizing: 'border-box',
    font: 'inherit',
    fontSize: '100%',
    margin: 0,
    padding: 0,
    verticalAlign: 'baseline',
  }

  return simpleReset
}

export const reset = css`
  /**
     * Global reset applied to prevent styling on top level tags outside of Lens
     * from interfering with Lens styles.
     *
     * This **must** be first.
     */
  ${props => props.theme.reset && props.theme.reset()}
`
