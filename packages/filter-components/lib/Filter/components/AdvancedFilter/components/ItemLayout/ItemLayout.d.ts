import type { ReactNode } from 'react';
import type { FilterItemLayoutProps } from '../../../../types/filter_item_layout_props';
declare type ItemLayoutProps = FilterItemLayoutProps & {
    children?: ReactNode;
};
/**
 * Handles the layout of an AdvancedFilter item
 */
export declare const ItemLayout: ({ children, item, onAdd, onRemove, showOperator, showAdd, showRemove, }: ItemLayoutProps) => JSX.Element;
export {};
