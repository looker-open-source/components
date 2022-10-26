export declare const multiInputWidth = 280;
export interface PlacementProps {
    /**
     * Placement in a group of adjacent inputs
     */
    placement?: 'left' | 'middle' | 'right';
}
export declare const inputPlacementStyle: ({ placement }: PlacementProps) => string;
export interface TokenStyleProps {
    tokenStyle?: boolean;
}
export declare const tokenStylePlaceholder: (props: TokenStyleProps) => "" | import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
