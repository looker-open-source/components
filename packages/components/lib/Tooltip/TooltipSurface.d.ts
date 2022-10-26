/// <reference types="react" />
import type { OverlaySurfaceProps } from '../Overlay/OverlaySurface';
interface TooltipSurfaceProps extends OverlaySurfaceProps {
    /**
     * Invert the Tooltip surface colors
     * @default true
     */
    invert?: boolean;
}
export declare const invertSurface: (props: TooltipSurfaceProps) => false | import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const TooltipSurface: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<OverlaySurfaceProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, TooltipSurfaceProps, never>;
export {};
