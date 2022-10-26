import type { FC } from 'react';
export interface PageSizeProps {
    className?: string;
    /**
     * Total number of items on all pages
     */
    total: number;
    /**
     * Number of items per page
     * Note: The first value passed into this prop should a number included in the options array prop (or defaultPageSizes)
     */
    value: number;
    /**
     * Array of page size options
     */
    options?: number[];
    /**
     * Callback that triggers when new value is selected
     */
    onChange: (value: number) => void;
    /**
     * If enabled controls will always be shown regardless of whether or not
     * there are any additional pages to be displayed.
     * @default false
     */
    alwaysVisible?: boolean;
}
export declare const PageSizeLayout: FC<PageSizeProps>;
export declare const PageSize: import("styled-components").StyledComponent<FC<PageSizeProps>, import("styled-components").DefaultTheme, {}, never>;
