export declare const HANDLE_SIZE: string;
export declare const handleCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<HandleProps, import("styled-components").DefaultTheme>>;
export interface HandleProps {
    color: string;
    isMouseDown: boolean;
    x: number;
}
export declare const Handle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, HandleProps, never>;
