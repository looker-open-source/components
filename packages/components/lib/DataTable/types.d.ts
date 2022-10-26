import type { ReactElement, ReactNode } from 'react';
import type { InputFiltersProps } from '../Form/Inputs/InputFilters';
import type { DataTableColumns } from './Column';
export interface DataTableProps {
    children: ReactNode;
    caption: string;
    columns: DataTableColumns;
    className?: string;
    /**
     * Sort function provided by the developer
     */
    onSort?: (id: string, sortDirection: 'asc' | 'desc') => void;
    /**
     * Options for select and select all behavior. Having a non-null select prop will auto-enable select behavior
     */
    select?: SelectConfig;
    /**
     * ID of the header row. Used for the aria-describedby of the select all checkbox.
     * Note: If undefined, this will be auto-generated. Generally only explicitly specified
     * in some limited test scenarios.
     */
    headerRowId?: string;
    /**
     * Options for bulk actions. Having a non-null bulk prop will auto-enable the control bar
     */
    bulk?: BulkActionsConfig;
    /**
     * Object containing list of filters the user can select from
     * and an onFilter callback to update the filters
     **/
    filters?: ReactElement<InputFiltersProps>;
    /**
     * Which columns should be "stuck" to the edge of their frame when DataTable content overflows
     *
     * Default here a bit convoluted:
     *  `select` is specified `firstColumnStuck` will default to `true`
     *  `select` is not specified `firstColumnStuck` will default to `false`
     *   Explicit specification of `firstColumnStuck` will always determine outcome
     */
    firstColumnStuck?: boolean;
    /**
     * Specify "state" of DataTable to control display of data within the table
     *  - `loading` will replace content with loading behavior (currently `Spinner`)
     *  - 'noResults` will display "No Results" rather than DataTable content (customize via `noResultsDisplay`)
     * Display loading behavior rather than DataTable content
     */
    state?: 'loading' | 'noResults';
    /**
     * Text to be displayed when no results state displayed
     */
    noResultsDisplay?: ReactNode;
}
export interface SelectConfig {
    /**
     * The ids of all DataTableItems which should be displayed as "selected"
     */
    selectedItems: string[];
    /**
     * An array containing the id's of all visible items (i.e. all items on the current page)
     * This is primarily used when determining the checked state of the select all checkbox
     */
    pageItems: string[];
    /**
     * Callback performed when user makes a selection
     */
    onSelect: (id: string) => void;
    /**
     * Callback performed when user makes selects the header checkbox
     */
    onSelectAll: () => void;
}
export interface BulkActionsConfig {
    /**
     * Bulk actions that are available when one or more items are selected
     */
    actions: ReactNode;
    /**
     * Triggered when the user presses the "Clear Selection" button
     * Note: The "Clear Selection" button will only appear right after first hitting the "Select all X results" button in the control bar
     */
    onTotalClearAll: () => void;
    /**
     * Triggered when the user presses on the "Select all X results" button in the control bar
     */
    onTotalSelectAll: () => void;
    /**
     * The total number of visible items
     * Primary purpose is to set the text of the Control Bar's "displayed items selected" text
     * Note: This should NOT include disabled items
     */
    pageCount: number;
    /**
     * The total number of items, both visible and nonvisible
     * Primary purpose is to set the text of the Control Bar's primary action
     * Note: This should NOT include disabled items
     */
    totalCount: number;
}
