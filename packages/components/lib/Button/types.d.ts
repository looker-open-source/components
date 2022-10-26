import type { CompatibleHTMLProps, StatefulColor, MaxWidthProps, MinWidthProps, SpaceProps, WidthProps } from '@looker/design-tokens';
import type { IconType } from '../Icon';
import type { ButtonSizeProps, ButtonSizes } from './size';
export interface ButtonIconProps {
    iconBefore?: IconType;
    iconAfter?: IconType;
}
export interface ButtonColorProps {
    /**
     * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
     * @default key
     */
    color?: StatefulColor;
}
export interface ButtonBaseProps extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>, ButtonSizeProps, ButtonColorProps, MaxWidthProps, MinWidthProps, WidthProps, SpaceProps {
    type?: 'button' | 'submit' | 'reset';
}
export interface ButtonProps extends ButtonBaseProps, ButtonIconProps {
    /**
     * prop for internal used to support correct color on Button's ripple.
     */
    rippleBackgroundColor?: 'background';
    size?: ButtonSizes;
    /**
     * If true, the button's width will be set to 100%.
     */
    fullWidth?: boolean;
}
