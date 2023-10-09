/// <reference types="react" />
import type { ScrollableDateListItemProps, MonthBaseProps } from './types';
export declare type MonthPropsWithScroll = MonthBaseProps & ScrollableDateListItemProps;
export declare const Month: import("styled-components").StyledComponent<({ className, datesSelected, draftTo, firstDayOfWeek, fullRender, index, locale, onSelect, onDraftSelect, date, setItemPosition, }: MonthPropsWithScroll) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
