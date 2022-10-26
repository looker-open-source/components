import type { ResponsiveValue } from 'styled-system';
declare type Body = 'body';
declare type Brand = 'brand';
declare type Code = 'code';
export declare type FontFamilies = Body | Brand | Code;
export declare type FontFamilyChoices = Record<FontFamilies, string>;
export declare type FontFamilyFallbacks = Record<FontFamilies, string[]>;
export declare const fontFamilies: Array<keyof FontFamilyChoices>;
export interface FontFamilyProps {
    fontFamily?: ResponsiveValue<FontFamilies>;
}
export {};
