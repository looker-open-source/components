// Type definitions for @styled-system/should-forward-prop 5.1
// Project: https://github.com/styled-system/styled-system/tree/master/packages/should-forward-prop
// Definitions by: Tom Picton <https://github.com/tpict>, Jason Maurer <https://github.com/jsonmaur>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type genericProp = any
type genericShouldForwardProp = (prop: genericProp) => boolean

declare module '@styled-system/should-forward-prop' {
  export const props: string[]
  export function createShouldForwardProp(
    props: genericProp[]
  ): genericShouldForwardProp

  declare const shouldForwardProp: genericShouldForwardProp
  export default shouldForwardProp
}
