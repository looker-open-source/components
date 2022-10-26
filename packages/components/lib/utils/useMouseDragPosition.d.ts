interface MouseState {
    mousePos: {
        x: number;
        y: number;
    };
    isMouseDown: boolean;
}
export declare function useMouseDragPosition(targetRef: HTMLElement | null): MouseState;
export {};
