import type { ValidationMessageProps } from '@looker/components';
import type { FilterExpressionType, UserAttributeWithValue } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterItemLayoutProps } from './filter_item_layout_props';
import type { Option } from './option';
/**
 * Interface for the parameters assigned to AdvancedFilter/components
 */
export declare type FilterParamProps<T extends string = string> = FilterItemLayoutProps<T> & {
    name?: string;
    filterType: FilterExpressionType;
    isLinked?: boolean;
    isLoading?: boolean;
    inline?: boolean;
    onChange: any;
    className?: string;
    suggestions?: string[];
    enumerations?: Option[] | null;
    field?: ILookmlModelExploreField | null;
    userAttributes?: UserAttributeWithValue[];
    validationMessage?: ValidationMessageProps;
    onInputChange?: (value: string) => void;
    showMatchesAdvanced: boolean;
    anyOption?: boolean;
    allowMultipleOptions?: boolean;
};
