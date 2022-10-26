import type { Ref } from 'react';
import type { ComboboxOptionObject } from '../types';
export declare function useComboboxRefs(forwardedRef: Ref<HTMLDivElement>): {
    autoCompletePropRef: import("react").MutableRefObject<boolean>;
    closeOnSelectPropRef: import("react").MutableRefObject<boolean>;
    freeInputPropRef: import("react").MutableRefObject<boolean>;
    indicatorPropRef: import("react").MutableRefObject<boolean>;
    inputReadOnlyPropRef: import("react").MutableRefObject<boolean>;
    isScrollingRef: import("react").MutableRefObject<boolean>;
    listRef: import("react").MutableRefObject<HTMLElement | null>;
    optionsRef: import("react").MutableRefObject<ComboboxOptionObject[]>;
    persistSelectionPropRef: import("react").MutableRefObject<boolean>;
    ref: (node: HTMLDivElement | null) => void;
    windowingPropRef: import("react").MutableRefObject<boolean>;
    wrapperElement: HTMLDivElement | null;
};
