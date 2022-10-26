/// <reference types="react" />
import type { ScrollableDateListItemProps, YearBaseProps } from './types';
export declare type YearProps = YearBaseProps & ScrollableDateListItemProps;
export declare const Year: ({ fullRender, index, setItemPosition, date, locale, ...props }: YearProps) => JSX.Element;
