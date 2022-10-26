import type { ValidationMessageProps } from '@looker/components';
import type { UserAttributeWithValue } from '@looker/filter-expressions';
import type { FilterProps } from '../Filter/types/filter_props';
/**
 * Options for computing and returning filters related errors.
 */
export interface FiltersErrorsOptions {
    userAttributes?: UserAttributeWithValue[];
    useLongMessageForm?: boolean;
}
export declare const useFiltersErrors: (filters: FilterProps[], options?: FiltersErrorsOptions) => ValidationMessageProps;
