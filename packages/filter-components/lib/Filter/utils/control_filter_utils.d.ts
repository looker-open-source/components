import type React from 'react';
import type { FilterModel } from '@looker/filter-expressions';
import type { Option } from '../types/option';
import type { FilterProps, InternalFilterProps } from '../types/filter_props';
interface AdapterProps extends Omit<FilterProps, 'expression'> {
    changeFilter: InternalFilterProps['changeFilter'];
}
/**
 * Returns the max number of options for a given filter type. Can be undefined
 */
export declare const maxForFilterType: (type: string) => number;
export declare const getControlFilterInfo: (item: FilterModel, adapterProps: AdapterProps) => {
    Component?: React.ElementType<any> | undefined;
    props?: React.ComponentProps<React.ElementType>;
};
export declare const TEST_ONLY: {
    getSingleValue: (item: FilterModel, stringOptions: Option[], onlyValuesFromOptions: boolean, fieldCategory?: string | null | undefined) => string;
};
export {};
