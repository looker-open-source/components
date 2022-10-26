import type { FC } from 'react';
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
export declare const Filtering: FC<FilteringProps>;
export {};
