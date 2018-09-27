import { ThemedProps } from '../types'
import { css } from './styled_components'

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
