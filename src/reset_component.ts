import {
  Interpolation,
  StyledComponentClass,
  ThemedStyledProps
} from 'styled-components'
import { ThemeInterface } from './themes'
import { reset } from './styles/reset'
import styled from './styled_components'

const Reset = styled<{}, 'div'>('div')`
  ${reset};
`

export const resetComponent = <P, TTag extends keyof JSX.IntrinsicElements>(
  tagName: TTag,
  attrs = {}
) => {
  return (
    strings: TemplateStringsArray,
    ...interpolations: Array<
      Interpolation<ThemedStyledProps<P, ThemeInterface>>
    >
  ): StyledComponentClass<P & JSX.IntrinsicElements[TTag], ThemeInterface> => {
    return Reset.withComponent<TTag>(tagName)
      .extend.attrs(attrs)
      .apply(null, [strings, ...interpolations])
  }
}
