/// <reference types="react" />
import type { Language } from 'prism-react-renderer';
declare type CodeBlockProps = {
    code: string;
    language: Language;
};
export declare const CodeBlock: ({ code, language }: CodeBlockProps) => JSX.Element;
export {};
