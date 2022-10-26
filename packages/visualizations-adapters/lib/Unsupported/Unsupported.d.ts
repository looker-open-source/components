import type { FC } from 'react';
import type { VisWrapperProps } from '../VisWrapper';
import type { SDKRecord, CAll, Fields } from '../types';
export interface UnsupportedProps extends VisWrapperProps {
    data: SDKRecord[];
    config: Partial<CAll>;
    fields: Fields;
}
export declare const Unsupported: FC<UnsupportedProps>;
