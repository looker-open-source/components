import type { ComboboxOptionObject } from '../../Combobox';
import type { SelectOptionObject, SelectOptionProps } from '../types';
export declare function getMatchingOption(value?: string, options?: SelectOptionObject[]): SelectOptionObject | undefined;
export declare function getOption(value?: string, options?: SelectOptionObject[]): {
    value: string;
    label: string;
} | {
    value: string;
    label?: undefined;
} | undefined;
export declare function getOptions(values?: string[], options?: SelectOptionObject[]): SelectOptionObject[] | undefined;
export declare function compareOption(option: {
    value: string;
}, value: string): boolean;
export declare function getFirstOption(options: SelectOptionProps[]): SelectOptionObject;
export declare function notInOptions(currentOptions: ComboboxOptionObject[], options?: SelectOptionObject[], inputValue?: string): boolean;
export declare const optionsHaveIcons: (options?: SelectOptionObject[] | undefined) => boolean;
