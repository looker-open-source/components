import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../Layout/utils/common';
export interface CardContentProps extends CommonLayoutProps, FlexboxProps, CompatibleHTMLProps<HTMLElement> {
}
export declare const CardContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CardContentProps, never>;
