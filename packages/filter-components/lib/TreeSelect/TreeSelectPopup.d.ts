import React from 'react';
declare type TreePopupProps = React.PropsWithChildren<{
    anchorElement: HTMLElement | null;
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}>;
export declare const TreeSelectPopup: ({ anchorElement, isOpen, setOpen, children, }: TreePopupProps) => JSX.Element | null;
export {};
