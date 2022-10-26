import type { DensityProp, DensityRamp, Theme } from '@looker/design-tokens';
export declare type GenerateIndentProps = DensityProp & {
    depth?: number;
};
export declare const generateIndentCalculation: (depth: number, density: DensityRamp, theme: Theme) => string;
export declare const generateIndent: ({ depth, density, }: GenerateIndentProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
