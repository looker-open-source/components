/// <reference types="react" />
import type { ListItemProps } from '../ListItem';
export declare type TreeItemProps = ListItemProps & {
    labelBackgroundOnly?: boolean;
};
export declare const TreeItem: import("styled-components").StyledComponent<({ className, color: propsColor, density: propsDensity, disabled, href, itemRole, labelBackgroundOnly: propsLabelBackgroundOnly, onBlur, onClick, onFocus, onKeyDown, onKeyUp, onMouseEnter, onMouseLeave, rel, ripple, selected, target, ...restProps }: TreeItemProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
