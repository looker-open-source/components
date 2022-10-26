import type { ReactNode } from 'react';
import type { FieldsetProps } from '../../Fieldset';
export interface OptionsGroupOptionProps {
    label: string;
    value: string;
    disabled?: boolean;
    detail?: ReactNode;
}
interface OptionsGroupLayout extends Omit<FieldsetProps, 'onChange'> {
    inline?: boolean;
}
export interface OptionsGroupProps<ValueType extends string | string[]> extends OptionsGroupLayout {
    name?: string;
    id?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    required?: boolean;
    options: OptionsGroupOptionProps[];
    validationType?: 'error';
    defaultValue?: ValueType;
    value?: ValueType;
    onChange?: (value: ValueType) => void;
}
export {};
