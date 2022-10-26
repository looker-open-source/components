import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
import type { Option } from '../../../../../../types/option';
interface ParamFilterProps {
    item: FilterModel;
    onChange?: (id?: string, props?: any) => void;
    enumerations?: Option[];
    validationMessage?: ValidationMessageProps;
}
export declare const ParamFilter: FC<ParamFilterProps>;
export {};
