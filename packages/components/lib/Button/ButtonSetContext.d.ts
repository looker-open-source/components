import type { MouseEvent } from 'react';
export declare type ButtonSetCallback<TValue extends string | string[] = string[]> = (option: TValue, event?: MouseEvent<HTMLButtonElement>) => void;
export interface ButtonSetContextProps<TValue extends string | string[] = string[]> {
    disabled?: boolean;
    value?: TValue;
    onItemClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const ButtonSetContext: import("react").Context<ButtonSetContextProps<string[]>>;
