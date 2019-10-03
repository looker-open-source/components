import { css } from 'styled-components'

export const genericComponentCSS = css`
  /**
     * Global reset applied to prevent styling on top level tags outside of Lens
     * from interfering with Lens styles.
     *
     * This **must** be first.
     */
  ${props => props.theme.reset && props.theme.reset()}
`
