import type { SpaceHelperProps } from './Space';
export interface SpaceVerticalProps extends Omit<SpaceHelperProps, 'align'> {
    /**
     * Align items vertically.
     * `stretch` will cause items to stretch the full width of the `SpaceVertical`.
     * `start` & `end` will apply a `flex-start` and `flex-end` behavior respectively.
     * @default start
     */
    align?: SpaceHelperProps['align'];
}
export declare const SpaceVertical: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SpaceVerticalProps, never>;
