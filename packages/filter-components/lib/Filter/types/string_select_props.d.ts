import type { ValidationMessageProps } from '@looker/components';
import type { Option } from '../types/option';
interface StringSelectProps<V extends string | string[]> {
    inline?: boolean;
    value: V;
    options: Option[];
    onChange: (value: V) => void;
    onInputChange?: (value: string) => void;
    validationMessage?: ValidationMessageProps;
    isLoading?: boolean;
    max?: number;
}
export declare type StringMultiSelectProps = StringSelectProps<string[]>;
export interface StringSingleSelectProps extends StringSelectProps<string> {
    anyOption?: boolean;
}
export {};
