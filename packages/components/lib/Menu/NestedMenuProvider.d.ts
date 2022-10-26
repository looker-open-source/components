import type { FC } from 'react';
import React from 'react';
import type { UseDelayedStateReturn } from '../utils';
export declare type CloseParentMenuProps = {
    closeParentMenu?: () => void;
};
export declare type NestedMenuContextProps = UseDelayedStateReturn<string> & CloseParentMenuProps;
export declare const NestedMenuContext: React.Context<NestedMenuContextProps>;
export declare const NestedMenuProvider: FC<CloseParentMenuProps>;
