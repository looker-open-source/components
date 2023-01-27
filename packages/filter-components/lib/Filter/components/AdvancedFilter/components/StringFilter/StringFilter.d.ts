/// <reference types="react" />
import type { StringFilterType } from '@looker/filter-expressions';
import type { FilterParamProps } from '../../../../types/filter_param_props';
export declare const StringFilter: ({ item, filterType, onInputChange, suggestions, userAttributes, isLoading, onChange, showMatchesAdvanced, validationMessage, ...rest }: FilterParamProps<StringFilterType>) => JSX.Element;
