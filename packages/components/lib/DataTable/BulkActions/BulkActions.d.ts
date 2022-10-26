import type { ReactNode, FC } from 'react';
interface BulkActionsProps {
    className?: string;
    actions: ReactNode;
    onTotalClearAll: () => void;
    onTotalSelectAll: () => void;
    pageCount: number;
    totalCount: number;
}
export declare const BulkActions: import("styled-components").StyledComponent<FC<BulkActionsProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
