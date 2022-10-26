/// <reference types="react" />
import type { FlatOption, SelectOptionObject } from '../types';
export declare const optionHeight = 28;
export declare function useShouldWindowOptions(flatOptions?: FlatOption[], propsWindowedOptions?: boolean): boolean;
export declare function useWindowedOptions(windowing?: boolean, flatOptions?: FlatOption[], navigationOptions?: SelectOptionObject[], isMulti?: boolean): {
    after: JSX.Element | null;
    before: JSX.Element | null;
    end: number;
    scrollToFirst: boolean;
    scrollToLast: boolean;
    start: number;
};
