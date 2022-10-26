import type { ColorProps } from '@looker/design-tokens';
interface SpinnerMarkerProps extends ColorProps {
    markers: number;
    markerIndex: number;
    markerRadius?: number;
    speed: number;
}
export declare const SpinnerMarker: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SpinnerMarkerProps, never>;
export {};
