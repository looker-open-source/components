/// <reference types="react" />
import type { CalendarNavProps } from './CalendarNav';
export declare type MonthPickerNavProps = Pick<CalendarNavProps, 'locale' | 'onMonthChange'> & {
    date: Date;
    onClose: () => void;
};
export declare const MonthPickerNav: ({ date, locale, onClose, onMonthChange, }: MonthPickerNavProps) => JSX.Element;
