/// <reference types="react" />
import type { CalendarLocaleProps, RangeProps } from './types';
export declare type MonthTitleProps = Pick<CalendarLocaleProps, 'locale'> & RangeProps & {
    className?: string;
    month: Date;
    inline: boolean;
};
export declare const MonthTitle: import("styled-components").StyledComponent<({ className, locale, month }: MonthTitleProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
