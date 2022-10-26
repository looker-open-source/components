import type { SizeLarge, SizeMedium, SizeSmall, SizeXSmall, SizeXXSmall } from '@looker/design-tokens';
export declare type ButtonBaseSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export declare type ButtonSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export interface ButtonSizeProps {
    /**
     * Defines the size of the button.
     * @default medium
     */
    size?: ButtonBaseSizes;
}
/**
 * Defines known heights of `Button*` and height/width of `IconButton`
 *
 * @private - External use is discouraged
 */
export declare const buttonSizeMap: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
};
export declare const iconButtonIconSizeMap: {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
};
export declare const buttonIconSizeMap: {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
};
export declare const buttonPadding: (hasIcon: boolean, size: ButtonBaseSizes | undefined) => "xsmall" | "small" | "medium" | "large" | "1.5rem";
export declare const buttonSize: (...args: any[]) => any;
