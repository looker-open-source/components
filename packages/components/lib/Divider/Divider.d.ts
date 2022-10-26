import type { CompatibleHTMLProps, PositionProps, SpaceProps } from '@looker/design-tokens';
export interface DividerProps extends CompatibleHTMLProps<HTMLHRElement>, PositionProps, SpaceProps {
    appearance?: 'default' | 'light' | 'dark' | 'onDark';
    customColor?: string;
    size?: string | number;
}
export declare const DividerBase: import("styled-components").StyledComponent<"hr", import("styled-components").DefaultTheme, DividerProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"hr", import("styled-components").DefaultTheme, DividerProps, never>;
