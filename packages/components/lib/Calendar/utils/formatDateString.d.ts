import type { Locale } from 'date-fns';
declare type Full = 'full';
declare type Long = 'long';
declare type Medium = 'medium';
declare type Short = 'short';
declare type Formats = Full | Long | Medium | Short;
declare const dateFormatRepetitions: Record<Formats, number>;
export declare type DateFormats = keyof typeof dateFormatRepetitions;
export declare type DateTimeOptions = {
    date?: boolean;
    time?: boolean;
};
export declare const formatDateString: (date?: Date | undefined, stringFormat?: DateFormats | string, locale?: Locale, timeZone?: undefined | string, options?: DateTimeOptions) => string | '';
export {};
