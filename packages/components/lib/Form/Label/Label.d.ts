import type { CompatibleHTMLProps, TextColorProps, TypographyProps } from '@looker/design-tokens';
export interface LabelProps extends TextColorProps, TypographyProps, CompatibleHTMLProps<HTMLLabelElement> {
}
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, LabelProps, never>;
