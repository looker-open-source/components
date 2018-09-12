import { css } from '../styled_components'

export const brandFont = `'Open Sans', Helvetica, Arial, sans-serif`
export const codeFont = `'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace`

export const truncate = (doTruncate: boolean) => {
  if (doTruncate) {
    return css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
  return ``
}
