import type { BackgroundColorProps, CompatibleHTMLProps, OpacityProps } from '@looker/design-tokens';
import type { CSSObject } from 'styled-components';
export interface BackdropProps extends CompatibleHTMLProps<HTMLDivElement>, BackgroundColorProps, OpacityProps {
    visible?: boolean;
    inlineStyle?: CSSObject;
}
export declare const Backdrop: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    'data-testid': string;
}, "data-testid">;
