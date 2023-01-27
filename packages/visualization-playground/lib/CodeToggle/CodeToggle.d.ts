import type { SetStateAction, Dispatch } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
declare type CodeToggleProps = {
    config: Partial<CAll>;
    codeToggled?: boolean;
    setCodeToggled: Dispatch<SetStateAction<boolean>>;
} & ({
    dashboard?: never;
    query?: string | number;
} | {
    dashboard?: number;
    query?: never;
});
export declare const CodeToggle: ({ config: configOverrides, query, dashboard, codeToggled, setCodeToggled, }: CodeToggleProps) => JSX.Element;
export {};
