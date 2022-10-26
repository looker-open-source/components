import type { Ref } from 'react';
import type { GetWindowedListBoundaryProps } from './getWindowedListBoundaries';
export declare type WindowSpacerTag = 'div' | 'li' | 'tr';
export declare type UseWindowProps<E extends HTMLElement> = Omit<GetWindowedListBoundaryProps, 'height' | 'scrollPosition'> & {
    /**
     * Tag to use for the spacers above and below the window
     */
    spacerTag?: WindowSpacerTag;
    ref?: Ref<E>;
};
export declare const useWindow: <E extends HTMLElement = HTMLElement>({ itemCount, enabled, itemHeight, ref, spacerTag, }: UseWindowProps<E>) => {
    after: JSX.Element | null;
    before: JSX.Element | null;
    containerElement: E | null;
    end: number;
    ref: (node: E | null) => void;
    start: number;
};
