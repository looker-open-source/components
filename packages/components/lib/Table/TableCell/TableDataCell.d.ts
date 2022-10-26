import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { TableCellProps } from './tableCell';
export interface TableDataCellProps extends TableCellProps, Omit<CompatibleHTMLProps<HTMLTableDataCellElement>, 'color'> {
}
export declare const TableDataCell: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, TableDataCellProps, never>;
