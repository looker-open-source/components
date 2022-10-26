import React from 'react';
import type { ListItemProps } from '../ListItem';
import type { TreeProps } from './types';
export declare const Tree: import("styled-components").StyledComponent<({ border: propsBorder, children, isOpen: propsIsOpen, itemRole, label, defaultOpen, onBlur, onClose, onFocus, onOpen, onMouseEnter, onMouseLeave, toggleOpen: propsToggleOpen, ...restProps }: TreeProps) => JSX.Element, import("styled-components").DefaultTheme, Partial<{
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}> & {
    defaultOpen?: boolean | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
} & import("../utils").GenericClickProps<HTMLElement> & Pick<ListItemProps, "color" | "icon" | "disabled" | "target" | "href" | "rel" | "download" | "selected" | "description" | "density" | "detail" | "truncate" | "hovered"> & {
    border?: boolean | undefined;
    dividers?: boolean | undefined;
    itemRole?: "link" | "none" | undefined;
    label: React.ReactNode;
}, never>;
