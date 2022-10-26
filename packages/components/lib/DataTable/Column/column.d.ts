import type { IconType } from '../../Icon';
import type { DataTableColumnSize } from './columnSize';
export declare type DataTableColumnType = 'string' | 'number' | 'date';
export declare type DataTableColumnSortDirection = 'asc' | 'desc';
export interface DataTableColumn {
    /**
     * Title for the column
     */
    title: string;
    /**
     * Display an `Icon` instead of the title text in the header row.
     * NOTE: `title` will still be used in columnSelector and will be added as
     * a tooltip to the icon displayed in the header row.
     */
    titleIcon?: IconType;
    /**
     * A unique identifier for a given column
     * Note: A column object's id should match a key in your data object template
     */
    id: string;
    /**
     * In some locales, we may change horizontal alignment of 'number'
     * @default string
     */
    type?: DataTableColumnType;
    /**
     * Specify a size to have the column consume a fixed width.
     *
     * For content that is not expected to wrap `auto` is often the best choice as the column
     * will only consume the horizontal room needed to contain its content.
     *
     * `auto` columns will use browser-native table column behavior.
     * `small`, `medium`, & `large` are the predefined sizes and will truncate
     * `nowrap` - column will not truncate and content will not wrap. Use with caution.
     * `0-100` (number) - width is a percentage of the table's width.
     *    Columns sized as a percentage do not support truncation.
     *    Mixing percentage columns with other sizing formats is not supported and yields
     *    unpredictable behavior. If percentages of all columns do not total 100% column widths
     *    may be somewhat unpredictable as well (browser table column calculations vary widely
     *    in these scenarios)
     *
     * @default auto
     */
    size?: DataTableColumnSize;
    /**
     * Determines whether a column is sortable (i.e. whether a column's header can be clicked to perform a sort)
     * Note: You must provide a onSort callback to the parent <DataTable/> component
     * @default false
     */
    canSort?: boolean;
    /**
     * Determines if the column is visible when the DataTable is initially displayed.
     * If `undefined` the column will not be selectable (always visible)
     * @default undefined
     */
    hide?: boolean;
    /**
     * @private
     */
    sortDirection?: DataTableColumnSortDirection;
}
export declare type DataTableColumns = DataTableColumn[];
