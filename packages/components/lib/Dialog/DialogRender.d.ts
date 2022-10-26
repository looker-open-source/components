import type { FC, ReactNode } from 'react';
import type { UseDialogResponse, UseDialogResponseDom } from './useDialog';
export declare type DialogRenderProp = (props: UseDialogResponseDom) => ReactNode;
export declare const DialogRender: FC<UseDialogResponse>;
