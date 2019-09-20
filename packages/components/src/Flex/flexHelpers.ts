import { css } from 'styled-components'

export const hidden = (hide?: boolean) =>
  hide
    ? css`
        display: none;
      `
    : false
