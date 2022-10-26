import type { DividerProps } from './Divider';
export interface DividerVerticalProps extends DividerProps {
    height?: number | string;
    stretch?: boolean;
}
export declare const DividerVertical: import("styled-components").StyledComponent<"hr", import("styled-components").DefaultTheme, DividerProps & DividerVerticalProps, never>;
