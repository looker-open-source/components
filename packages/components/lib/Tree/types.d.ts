import type { ReactNode } from 'react';
import type { ControlledLoosely } from '../Accordion2/controlTypes';
import type { ListItemProps } from '../ListItem';
import type { GenericClickProps } from '../utils/useClickable';
export declare const treeItemInnerPropKeys: readonly ["color", "density", "description", "detail", "disabled", "hovered", "icon", "selected", "truncate", "download", "href", "rel", "target"];
export declare type TreeItemInnerPropKey = typeof treeItemInnerPropKeys[number];
export declare const isTreeItemInnerPropKey: (propKey: string) => propKey is "color" | "icon" | "disabled" | "target" | "href" | "rel" | "download" | "selected" | "description" | "density" | "detail" | "truncate" | "hovered";
export declare type TreeProps = ControlledLoosely & GenericClickProps<HTMLElement> & Pick<ListItemProps, TreeItemInnerPropKey> & {
    /**
     * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
     */
    border?: boolean;
    /**
     * Produce a small visual space between each `TreeItem` displayed in the list so adjacent
     * items that are in a "selected" or active state have visual separation.
     * @default false
     */
    dividers?: boolean;
    /**
     * Use itemRole to set the type of wrapper element for the label. By default the label's wrapper element is a <button>.
     * Note: Unlike TreeItem, 'button' is not an allowed value since click event handlers are passed to the nested <AccordionDisclosure> div
     */
    itemRole?: 'link' | 'none';
    /**
     * Label text or element displayed within Tree's internal AccordionDisclosure
     */
    label: ReactNode;
};
export declare type WindowedTreeNodeProps = {
    /**
     * The JSX to render for the current node.
     * If this node is a tree, use `items` instead of children.
     */
    content: JSX.Element;
    /**
     * Use to control the opened / closed state of the tree instead of
     * props on the Tree component itself (necessary for windowing)
     */
    isOpen?: boolean;
    /**
     * An array of objects representing the tree items and nested trees
     * to be rendered as children of the element in `content`
     */
    items?: WindowedTreeNodeProps[];
};
export declare type WindowedTreeNodeIDProps = Omit<WindowedTreeNodeProps, 'items'> & {
    content: JSX.Element;
    id: number;
    items?: WindowedTreeNodeIDProps[];
};
export declare type ToggleStateMap = {
    [id: number]: {
        isOpen: boolean;
        length: number;
    };
};
