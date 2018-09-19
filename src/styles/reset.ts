import { ThemedProps } from '../types'

export const reset = <P>(props: ThemedProps<P>) => {
  return props.theme.reset()
}
