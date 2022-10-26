import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
import type { GroupInputProps } from '../../../GroupInput';
interface SingleNumberInputProps extends Omit<GroupInputProps, 'onChange'> {
    item: FilterModel;
    onChange?: (id: string, value: any) => void;
    validationMessage?: ValidationMessageProps;
}
export declare const SingleNumberInput: FC<SingleNumberInputProps>;
export {};
