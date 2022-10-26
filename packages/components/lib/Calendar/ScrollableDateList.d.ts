/// <reference types="react" />
import type { ScrollableDateListBaseProps, YearListItemProps, MonthListItemProps } from './types';
export declare type ScrollableScrollableDateListBaseProps = ScrollableDateListBaseProps & {
    className?: string;
    buffer: number;
    getItemDate: (baseMonth: Date, offset: number) => Date;
    itemComponent: (itemProps: any) => JSX.Element;
    itemProps: YearListItemProps | MonthListItemProps;
    thresholdRatio: number;
};
export declare const ScrollableDateList: import("styled-components").StyledComponent<({ className, currentDate, baseMonth, setBaseMonth, buffer, getItemDate, onMonthChange, itemComponent: Component, itemProps, thresholdRatio, }: ScrollableScrollableDateListBaseProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
