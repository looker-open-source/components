import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { TableCellProps } from './tableCell';
export interface TableHeaderCellProps extends TableCellProps, CompatibleHTMLProps<HTMLTableHeaderCellElement> {
}
export declare const TableHeaderCell: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, TableHeaderCellProps, never>;
