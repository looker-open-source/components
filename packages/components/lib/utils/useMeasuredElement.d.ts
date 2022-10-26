export declare const measureElement: (element?: HTMLElement | null | undefined) => DOMRect | {
    bottom: number;
    height: number;
    left: number;
    rect: {};
    right: number;
    toJSON: () => null;
    top: number;
    width: number;
    x: number;
    y: number;
};
export declare const useMeasuredElement: (element: HTMLElement | null) => [DOMRect, () => void];
