/// <reference types="react" />
import type { CalendarLocaleProps, NavCB } from './types';
export declare type CalendarNavProps = Pick<CalendarLocaleProps, 'locale'> & {
    monthYear: Date;
    onMonthChange: NavCB;
    onOpenMonthPicker: () => void;
};
export declare const CalendarNav: ({ locale, monthYear, onMonthChange, onOpenMonthPicker, }: CalendarNavProps) => JSX.Element;
