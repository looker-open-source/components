import type { ReactNode } from 'react';
import type { DataStore } from '../hooks';
declare type ContextWrapperProps = {
    initialState?: DataStore;
    children?: ReactNode;
};
export declare const ContextWrapper: ({ children, initialState, }: ContextWrapperProps) => JSX.Element;
export {};
