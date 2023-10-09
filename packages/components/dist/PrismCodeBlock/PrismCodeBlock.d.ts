/// <reference types="react" />
import type { Language } from 'prism-react-renderer';
declare type PrismCodeBlockProps = {
    code: string;
    language: Language;
};
export declare const PrismCodeBlock: ({ code, language }: PrismCodeBlockProps) => JSX.Element;
export {};
