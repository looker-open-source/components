import type { FC } from 'react';
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import type { SDKRecord } from '@looker/visualizations-adapters';
declare type PieLabelProps = {
    arc: PieArcDatum<SDKRecord>;
    outerRadius: number;
    labelContent: string;
    datumColor: string;
};
export declare const PieLabel: FC<PieLabelProps>;
export {};
