import type { CompatibleHTMLProps, SpaceProps, SizeLarge, SizeMedium, SizeSmall, SizeXSmall, SizeXXSmall } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { Property } from 'csstype';
import type { IconProps } from '../Icon';
import type { TooltipProps } from '../Tooltip';
import type { ButtonBaseProps } from './types';
interface IconButtonVariantProps {
    /**
     * Defines the variant or mapping of colors to style properties, like border of the button.
     * @default false
     */
    outline?: boolean;
}
export declare type IconButtonSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export declare type ToggleColor = 'key' | 'calculation' | 'dimension' | 'measure';
export interface ToggleColorProps {
    /**
     * Change icon and background color when toggled
     * Supports 'calculation', 'dimension', 'measure' and 'key'
     * @default key
     */
    toggleColor?: ToggleColor;
}
export interface IconButtonProps extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'>, Omit<ButtonBaseProps, 'color'>, IconButtonVariantProps, ToggleColorProps, Pick<IconProps, 'icon'>, SpaceProps {
    type?: 'button' | 'submit' | 'reset';
    /**
     * Display border
     * @default false
     */
    outline?: boolean;
    /**
     *  A hidden text label for the IconButton that is accessible to assistive technology
     */
    label: TooltipProps['content'];
    /**
     *  Sets the size of the button
     * @default xsmall
     */
    size?: IconButtonSizes;
    /**
     *  Optional square icon button variant
     * @default round
     */
    shape?: 'round' | 'square';
    /**
     * If the IconButton is in the optional toggled on or toggled off state
     */
    toggle?: boolean;
    /**
     * to improve toggle's behavior this prop will update the background-color to `${toggleColor}Accent` when toggle is true
     * @default false
     */
    toggleBackground?: boolean;
    /**
     * By default IconButton shows a Tooltip with the Button's label text. Setting disableTooltip will disable that behavior.
     * @default false
     */
    tooltipDisabled?: boolean;
    /**
     * Placement of the built-in Tooltip.
     */
    tooltipPlacement?: Placement;
    /**
     * Width of the built-in Tooltip.
     */
    tooltipWidth?: string;
    /**
     * Text alignment of the built-in Tooltip.
     */
    tooltipTextAlign?: Property.TextAlign;
}
export {};
