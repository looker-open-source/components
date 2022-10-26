import type { FC } from 'react';
import type { ProgressCircularSizes } from './size';
export interface ProgressCircularProps {
    /**
     * Size of spinner
     * @default large
     */
    size?: ProgressCircularSizes;
    /**
     * The current progress of a determinable progress, between 0 and 1
     */
    progress?: number;
    /**
     * Accessible label
     */
    label?: string;
}
export declare const ProgressCircular: FC<ProgressCircularProps>;
