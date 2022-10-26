import type { FC } from 'react';
import type { SDKRecord, Fields, CAll } from '@looker/visualizations-adapters';
import type { IError } from '@looker/sdk';
declare type DebugProps = {
    ok?: boolean;
    data?: SDKRecord[];
    error?: IError;
    config?: Partial<CAll>;
    fields?: Fields;
};
export declare const Debug: FC<DebugProps>;
export {};
