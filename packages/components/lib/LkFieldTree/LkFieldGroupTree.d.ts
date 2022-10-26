/// <reference types="react" />
/**
 * LkFieldGroupTree is typically used to represent a group of Looker fields
 * like a dimension group. If an LkFieldGroupTree's "isOpen" prop is false and its "selected"
 * prop is true, the Tree will have 48px of padding to right align it's selected background
 * with the selected backgrounds of other items.
 */
export declare const LkFieldGroupTree: import("styled-components").StyledComponent<({ children, isOpen: propsIsOpen, label, defaultOpen, onBlur, onClose, onFocus, onOpen, onMouseEnter, onMouseLeave, toggleOpen: propsToggleOpen, ...restProps }: import("./types").LkFieldTreeProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
