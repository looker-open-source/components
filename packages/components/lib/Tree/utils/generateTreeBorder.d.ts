import type { DensityRamp, Theme } from '@looker/design-tokens';
export declare type TreeBorderProps = {
    border?: boolean;
    density: DensityRamp;
    depth: number;
    theme: Theme;
};
/**
 * Creates a vertical "border" for Tree's content container if border is true
 * Testing note: style rules validated by storyshots
 */
export declare const generateTreeBorder: ({ border, density, depth, theme, }: TreeBorderProps) => false | import("styled-components").FlattenSimpleInterpolation;
