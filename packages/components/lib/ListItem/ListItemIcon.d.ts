import type { DefaultTheme, StyledComponent } from 'styled-components';
import type { DensityProp } from '@looker/design-tokens';
export declare type ListItemIconProps = DensityProp & {
    color?: string;
    disabled?: boolean;
    alignStart?: boolean;
};
export declare const ListItemIcon: StyledComponent<'div', DefaultTheme, ListItemIconProps>;
