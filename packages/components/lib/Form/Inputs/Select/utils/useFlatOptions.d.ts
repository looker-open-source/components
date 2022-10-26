import type { FlatOption, SelectOptionObject, SelectOptionProps } from '../types';
export declare const getFlatOptions: (options: SelectOptionProps[]) => {
    flatOptions: FlatOption[];
    navigationOptions: SelectOptionObject[];
};
/**
 * Takes potentially grouped options and returns 2 arrays of flattened options:
 * 1) flatOptions that includes dividers & headers (used for windowing), and
 * 2) navigationOptions that only includes options with values
 * @param options
 */
export declare const useFlatOptions: (options?: SelectOptionProps[] | undefined) => {
    flatOptions: FlatOption[];
    navigationOptions: SelectOptionObject[];
} | {
    flatOptions: undefined;
    navigationOptions: undefined;
};
