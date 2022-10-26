/// <reference types="react" />
export declare function useScrollState(): {
    listClientRect: DOMRect | undefined;
    listScrollPosition: number;
    setListClientRect: import("react").Dispatch<import("react").SetStateAction<DOMRect | undefined>>;
    setListScrollPosition: import("react").Dispatch<import("react").SetStateAction<number>>;
};
