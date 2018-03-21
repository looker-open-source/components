/// <reference types="react" />
import { SFC } from 'react';
export interface ButtonProps {
    className?: string;
    danger?: boolean;
    onClick?: (...args: any[]) => void;
}
export declare const Button: SFC<ButtonProps>;
export declare const LinkButton: SFC<ButtonProps>;
