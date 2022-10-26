import type { FilterExpressionType, UserAttributeWithValue, FilterASTNode, FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { Option } from './option';
import type { ValidationMessageProps } from '@looker/components';
export interface FilterChangeProps {
    expression: string;
}
declare type ExpressionTypeProps = {
    /**
     * The type of the expression. Required if field is not provided.
     * Will be derived from field and type if absent.
     */
    expressionType: FilterExpressionType;
};
declare type FieldProps = {
    /**
     * The field associated with the filter.
     * Required if expressionType is not provided.
     */
    field: ILookmlModelExploreField | null;
};
declare type TypeProps = {
    /**
     * The type on the DashboardFilter, e.g. field_filter,
     * used to derive expressionType if that is not provided
     */
    type: string;
};
declare type ExpressionTypeOrFieldProps = (ExpressionTypeProps | FieldProps | TypeProps) & (Partial<ExpressionTypeProps> & Partial<FieldProps> & Partial<TypeProps>);
/**
 * Interface for the <Filter/> component's props property.
 * Requires at least one of: expressionType, field, type
 */
export declare type FilterProps = ExpressionTypeOrFieldProps & {
    /**
     * The UI config that determines how a control filter will render and behave
     */
    config?: any;
    /**
     * The current value of the filter.
     * See {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.
     */
    expression: string;
    /**
     * Used to generate unique key for multi-condition advanced filters
     */
    name: string;
    /**
     * Flag for filters where suggestions are link to another filter
     */
    isLinked?: boolean;
    /**
     * Suggestions are currently loading
     */
    isLoading?: boolean;
    /**
     * Filter will render error styling if this is true and expression is empty
     */
    isRequired?: boolean;
    /**
     * Render filter horizontally (applies to checkboxes and radio buttons)
     */
    inline?: boolean;
    /**
     * Called when the filter expression is changed
     */
    onChange?: (value: FilterChangeProps) => void;
    /**
     * Called in the event that user is typing in a suggestable filter, but the results
     * are at the front-end limit of 999, so filtering must be done in the API
     */
    onInputChange?: (value: string) => void;
    /**
     * Called when user attributes are needed in the filter
     */
    loadUserAttributes?: () => void;
    /**
     * Can be initially empty – loadUserAttributes will be called when they are needed
     */
    userAttributes?: UserAttributeWithValue[];
    /**
     * Suggestions for the filter – see useSuggestable hook for fetching suggestions via the API
     */
    suggestions?: string[];
    /**
     * Enumerations for the filter
     */
    enumerations?: Option[] | null;
    /**
     * Used to initialize filters in Edit Mode – do not use if filter is not editable
     */
    dispatchConfigTypeChange?: boolean;
    /**
     * Skip checking if expression can be rendered by filter control
     */
    skipFilterConfigCheck?: boolean;
    /**
     * Allow multiple values to filter by
     */
    allowMultipleValues?: boolean;
};
/**
 * Interface for <InternalFilter /> and <InternalFilterAdvanced />
 */
export interface InternalFilterProps extends Omit<FilterProps, 'type' | 'expressionType' | 'expression' | 'loadUserAttributes' | 'onChange'> {
    expressionType: FilterExpressionType;
    ast: FilterASTNode | undefined;
    changeFilter: (id: number, newItem: FilterModel) => void;
    validationMessage: ValidationMessageProps;
}
export {};
