/// <reference types="react" />
import type { UserAttributeWithValue } from '@looker/filter-expressions';
import type { FilterProps } from '../Filter/types/filter_props';
export interface FilterErrorMessageProps {
    filters: FilterProps[];
    userAttributes?: UserAttributeWithValue[];
    useLongMessageForm?: boolean;
}
export declare const FilterErrorMessage: ({ filters, userAttributes, useLongMessageForm, }: FilterErrorMessageProps) => JSX.Element | null;
