/// <reference types="react" />
export interface PaginationProps {
    className?: string;
    current: number;
    pages: number;
    onChange: (page: number) => void;
    /**
     * If enabled controls will always be shown regardless of whether or not
     * there are any additional pages to be displayed.
     * @default false
     */
    alwaysVisible?: boolean;
}
export declare const Pagination: import("styled-components").StyledComponent<({ alwaysVisible, className, current, pages, onChange, }: PaginationProps) => JSX.Element | null, import("styled-components").DefaultTheme, {}, never>;
