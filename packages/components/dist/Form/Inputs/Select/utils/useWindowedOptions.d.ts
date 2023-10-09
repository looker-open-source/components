import React from 'react';
import type { MutableRefObject } from 'react';
import type { FlatOption, SelectOptionObject } from '../types';
export declare const optionHeight = 28;
export declare function useShouldWindowOptions(flatOptions?: FlatOption[], propsWindowedOptions?: boolean): boolean;
export declare function useWindowedOptions(windowing?: boolean, flatOptions?: FlatOption[], navigationOptions?: SelectOptionObject[], isMulti?: boolean, itemHeight?: number): {
    after: React.ReactNode;
    before: React.ReactNode;
    end: number;
    scrollTo: {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    start: number;
};
/**
 * Utility component to trigger scrollIntoView if user keyboard navigates
 * down at the end to cycle back to the beginning, or vice versa.
 * This is necessary because with windowing there's no actual item
 * rendered there to trigger the scroll.
 */
export declare const ScrollToMe: ({ top, isScrollingRef, }: {
    top: number;
    isScrollingRef?: React.MutableRefObject<boolean> | undefined;
}) => JSX.Element;
