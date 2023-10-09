import type { ReactNode } from 'react';
import type { RangeProps } from './types';
export declare type CellProps = RangeProps & {
    children?: ReactNode;
    className?: string;
    weekEnd?: boolean;
    weekStart?: boolean;
};
export declare const Cell: import("styled-components").StyledComponent<({ children, className }: CellProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
