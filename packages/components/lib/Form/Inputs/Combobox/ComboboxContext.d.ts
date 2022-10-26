import type { Ref, MutableRefObject, Dispatch, SetStateAction } from 'react';
import type { ComboboxData, ComboboxMultiData, ComboboxTransition, ComboboxState, ComboboxMultiActionPayload } from './utils/state';
import type { ComboboxCallback, ComboboxMultiCallback, ComboboxOptionIndicatorProps, ComboboxOptionObject } from './types';
export interface ComboboxContextProps<TData = ComboboxData, TChange = ComboboxCallback, TTransition = ComboboxTransition> {
    data: TData;
    inputCallbackRef?: Ref<HTMLInputElement>;
    inputElement?: HTMLInputElement | null;
    wrapperElement?: HTMLDivElement | null;
    listRef?: MutableRefObject<HTMLElement | null>;
    onChange?: TChange;
    optionsRef?: MutableRefObject<ComboboxOptionObject[]>;
    state?: ComboboxState;
    transition?: TTransition;
    id?: string;
    autoCompletePropRef?: MutableRefObject<boolean>;
    persistSelectionPropRef?: MutableRefObject<boolean>;
    closeOnSelectPropRef?: MutableRefObject<boolean>;
    inputReadOnlyPropRef?: MutableRefObject<boolean>;
    windowingPropRef?: MutableRefObject<boolean>;
    freeInputPropRef?: MutableRefObject<boolean>;
    isScrollingRef?: MutableRefObject<boolean>;
    indicatorPropRef?: MutableRefObject<ComboboxOptionIndicatorProps['indicator']>;
    isVisible?: boolean;
    openOnFocus?: boolean;
    openOnClick?: boolean;
    listScrollPosition?: number;
    setListScrollPosition?: Dispatch<SetStateAction<number>>;
    listClientRect?: DOMRect;
    setListClientRect?: Dispatch<SetStateAction<DOMRect | undefined>>;
}
export declare type ComboboxMultiContextProps = ComboboxContextProps<ComboboxMultiData, ComboboxMultiCallback, ComboboxTransition<ComboboxMultiActionPayload>>;
export declare const defaultData: ComboboxData;
export declare const defaultMultiData: ComboboxMultiData;
export declare const ComboboxContext: import("react").Context<ComboboxContextProps<ComboboxData, ComboboxCallback<import("./types").MaybeComboboxOptionObject>, ComboboxTransition<import("./utils/state").ComboboxActionPayload>>>;
export declare const ComboboxMultiContext: import("react").Context<ComboboxMultiContextProps>;
export declare const OptionContext: import("react").Context<ComboboxOptionObject | undefined>;
