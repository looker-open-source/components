import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens';
import type { ComplexLayoutProps } from '../utils/complex';
/**
 * styled-system has its own FlexBoxProps, so we call this one FlexProps to disambiguate.
 */
export interface FlexProps extends CompatibleHTMLProps<HTMLDivElement>, Omit<ComplexLayoutProps, 'display'>, FlexboxProps {
}
/**
 * @deprecated - Use a more specific layout helper such as `Space` or `SpaceVertical`,
 * Alternatively `<Box2 display="flex" />` fully replicates previous `Flex` behavior
 */
export declare const Flex: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FlexProps, never>;
