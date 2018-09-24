import { css } from '../styled_components'
import { ThemedProps } from '../types'

export const reset = <P>(props: ThemedProps<P>) => props.theme.reset()

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
