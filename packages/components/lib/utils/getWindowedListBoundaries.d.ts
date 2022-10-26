export interface GetWindowedListBoundaryProps {
    /**
     * If false, the start and end values will be the entire list length
     * @default true
     */
    enabled?: boolean;
    /**
     * The total number of items in the list
     */
    itemCount: number;
    /**
     * The height of an individual item
     */
    itemHeight: number;
    /**
     * The number of items to render above and below the visible area
     * @default 5
     */
    buffer?: number;
    /**
     * The height of the scrollable container
     */
    height?: number;
    /**
     * The scroll position of the list in the container
     */
    scrollPosition?: number;
}
export declare function getWindowedListBoundaries({ buffer, height, scrollPosition, enabled, itemCount, itemHeight, }: GetWindowedListBoundaryProps): {
    afterHeight: number;
    beforeHeight: number;
    end: number;
    start: number;
};
