import React from 'react';
import type { ListProps } from '../List';
import type { CloseParentMenuProps } from './NestedMenuProvider';
export declare type MenuListProps = Omit<ListProps, 'color'> & CloseParentMenuProps;
export declare const MenuListInternal: React.ForwardRefExoticComponent<Omit<ListProps, "color"> & CloseParentMenuProps & React.RefAttributes<HTMLUListElement>>;
/**
 * @private Should only be used when a more complicated <Popover> + <MenuList>
 * composition is needed over a normal <Menu> element.
 */
export declare const MenuList: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<ListProps, "color"> & CloseParentMenuProps & React.RefAttributes<HTMLUListElement>>, import("styled-components").DefaultTheme, {}, never>;
