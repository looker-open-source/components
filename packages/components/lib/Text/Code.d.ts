import type { ReactNode } from 'react';
import type { TextBaseProps } from './TextBase';
export interface CodeProps extends TextBaseProps {
    children?: ReactNode;
}
export declare const Code: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & CodeProps, never>;
