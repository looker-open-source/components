import type { FC, ReactNode } from 'react';
export declare type JSXReplaceFunction = (text: string, i: number, curCharStart: number) => ReactNode;
export interface ReplaceTextProps {
    match: RegExp | string;
    replace: JSXReplaceFunction;
}
/**
 * Replaces text
 */
export declare const ReplaceText: FC<ReplaceTextProps>;
