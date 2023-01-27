/// <reference types="react" />
import type { CAll } from '@looker/visualizations-adapters';
declare type CodeEditorProps = {
    config: Partial<CAll>;
} & ({
    dashboard?: never;
    query?: string | number;
} | {
    dashboard?: number;
    query?: never;
});
export declare const CodeEditor: ({ config: configOverrides, query, dashboard, }: CodeEditorProps) => JSX.Element;
export {};
