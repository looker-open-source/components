import type { ReactNode } from 'react';
interface BulkActionsProps {
    className?: string;
    actions: ReactNode;
    onTotalClearAll: () => void;
    onTotalSelectAll: () => void;
    pageCount: number;
    totalCount: number;
}
export declare const BulkActions: import("styled-components").StyledComponent<({ actions, className, onTotalClearAll, onTotalSelectAll, pageCount, totalCount, }: BulkActionsProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
