/// <reference types="react" />
import type { NavTreeProps } from './types';
/**
 * Adds additional padding to left side of all NavTree-related elements
 * to allow for better click targeting when NavTree composition bumps against
 * left page edge.
 */
export declare const INDICATOR_SPACER = "8px";
export declare const NavTree: import("styled-components").StyledComponent<({ children, defaultOpen, indicatorLabel, isOpen: propsIsOpen, label, onBlur, onClick, onClose, onFocus, onKeyUp, onOpen, onMouseEnter, onMouseLeave, toggleOpen: propsToggleOpen, truncate, ...restProps }: NavTreeProps) => JSX.Element, import("styled-components").DefaultTheme, {} & NavTreeProps, never>;
