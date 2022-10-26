import React from 'react';
import type { ListItemProps } from '../ListItem';
import type { UseNestedMenuProps } from './useNestedMenu';
export interface MenuItemProps extends Omit<ListItemProps, 'color'>, Pick<UseNestedMenuProps, 'nestedMenu'> {
}
export declare const MenuItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLLIElement>>, import("styled-components").DefaultTheme, {}, never>;
