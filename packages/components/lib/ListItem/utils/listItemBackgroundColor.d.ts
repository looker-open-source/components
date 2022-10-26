import type { Theme } from '@looker/design-tokens';
import type { ListItemColorProp, ListItemStatefulProps } from '../types';
export declare type ListItemBackgroundColorProps = ListItemStatefulProps & ListItemColorProp & {
    /**
     * Indicates ripple is enabled and hover should not be used
     */
    ripple?: boolean;
};
/**
 * @TODO Remove hovered prop and hovered logic when ripple effect
 * is implemented in LkField components. All other ListItem related
 * components (i.e. ListItem, NavTreeItem, TreeItem) all use ripple
 * to handle hover state.
 */
export declare const listItemBackgroundColor: ({ color, disabled, hovered: propsHovered, ripple, selected, theme: { colors }, }: ListItemBackgroundColorProps & {
    theme: Theme;
}) => import("styled-components").FlattenSimpleInterpolation;
