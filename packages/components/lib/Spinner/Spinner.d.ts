import type { CompatibleHTMLProps, PositionProps, SpaceProps } from '@looker/design-tokens';
import type { FC } from 'react';
export interface SpinnerProps extends SpaceProps, PositionProps, CompatibleHTMLProps<HTMLElement> {
    markers?: number;
    markerRadius?: number;
    speed?: number;
    size?: number;
    color?: string;
}
export declare const Spinner: import("styled-components").StyledComponent<FC<SpinnerProps>, import("styled-components").DefaultTheme, {}, never>;
