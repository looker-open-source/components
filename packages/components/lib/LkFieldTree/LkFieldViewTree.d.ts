/// <reference types="react" />
/**
 * LkFieldViewTree is used to represent a Looker View and is expected to be
 * at the 0th-depth (i.e. the top-level) of an LkField composition.
 *
 * It comes with padding overrides for additional spacing and a 1px border bottom.
 */
export declare const LkFieldViewTree: import("styled-components").StyledComponent<({ children, isOpen: propsIsOpen, label, defaultOpen, onBlur, onClose, onFocus, onOpen, onMouseEnter, onMouseLeave, toggleOpen: propsToggleOpen, ...restProps }: import("./types").LkFieldTreeProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
