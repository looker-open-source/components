/// <reference types="react" />
import type { InputTypes } from '../QueryInput';
declare type FilteringProps = {
    setQueryIdentifier: (id: string | number) => void;
    setFetchBy: (type: InputTypes) => void;
} & ({
    dashboard?: never;
    query?: string | number;
} | {
    dashboard?: number;
    query?: never;
});
export declare const Filtering: ({ query, dashboard, setQueryIdentifier, setFetchBy, }: FilteringProps) => JSX.Element | null;
export {};
