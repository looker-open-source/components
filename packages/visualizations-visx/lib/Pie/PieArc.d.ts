import type { FC } from 'react';
import type { Arc } from 'd3-shape';
import type { SDKRecord } from '@looker/visualizations-adapters';
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import type { Point } from '@visx/point';
declare type PieArcProps = {
    arc: PieArcDatum<SDKRecord>;
    path: Arc<any, PieArcDatum<SDKRecord>>;
    onMouseOut: () => void;
    onMouseOver: (arc: PieArcDatum<SDKRecord>, point: Point | null) => void;
    renderTooltip: boolean;
    datumColor: string;
};
export declare const PieArc: FC<PieArcProps>;
export {};
