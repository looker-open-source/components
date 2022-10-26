import type { FlexboxProps } from '@looker/design-tokens';
import type { ComplexLayoutProps } from '../utils/complex';
export interface FlexItemProps extends ComplexLayoutProps, FlexboxProps {
}
/**
 * @deprecated - Use `Box2` or `div` instead.
 * NOTE: It's quite possible you don't need `FlexItem` at all
 */
export declare const FlexItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FlexItemProps, never>;
