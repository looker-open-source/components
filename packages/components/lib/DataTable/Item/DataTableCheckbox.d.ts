import type { FC } from 'react';
import type { MixedBoolean } from '../../Form';
export interface DataTableCheckboxProps {
    id?: string;
    checked?: MixedBoolean;
    disabled?: boolean;
    onChange?: () => void;
}
export declare const checkListProps: string[];
export declare const DataTableCheckbox: FC<DataTableCheckboxProps>;
