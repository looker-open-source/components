/// <reference types="react" />
import type { DataTableProps } from './types';
export interface TableProps extends DataTableProps {
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    caption: string;
    columnsVisible: string[];
}
export declare const TableLayout: (props: TableProps) => JSX.Element;
export declare const Table: import("styled-components").StyledComponent<(props: TableProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const TableScroll: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
