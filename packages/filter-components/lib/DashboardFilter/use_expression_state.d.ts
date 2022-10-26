import type { IDashboardFilter } from '@looker/sdk';
import type { FilterChangeProps } from '../Filter/types/filter_props';
export interface UseExpressionStateProps {
    /**
     * The current value of the filter.
     * See {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.
     */
    expression?: string;
    /**
     * A dashboard filter as defined in @looker/sdk
     */
    filter: IDashboardFilter;
    /**
     * Called when the filter expression is changed
     */
    onChange: (expression: string) => void;
}
/**
 * Custom state hook for filter expression
 */
export declare const useExpressionState: ({ expression: propsExpression, filter, onChange, }: UseExpressionStateProps) => {
    expression: string;
    onChange: (value: FilterChangeProps) => void;
};
