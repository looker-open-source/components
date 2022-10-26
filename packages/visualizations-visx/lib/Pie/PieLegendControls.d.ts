import type { FC } from 'react';
import type { LegendOrientations } from './types';
declare type PieLegendControlsProps = {
    contentRect: {
        width: number;
        height: number;
    };
    containerRect: {
        width: number;
        height: number;
    };
    orientation: LegendOrientations;
    page: number;
    totalPages: number;
    handleNextClick: () => void;
    handlePrevClick: () => void;
};
export declare const PieLegendControls: FC<PieLegendControlsProps>;
export {};
