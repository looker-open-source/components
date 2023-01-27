import type { SetStateAction, Dispatch } from 'react';
import type { ReferenceLine, CAll } from '@looker/visualizations-adapters';
interface ReferenceLinesEditorProps {
    name: string;
    value?: ReferenceLine[];
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
}
export declare const ReferenceLines: ({ value, }: ReferenceLinesEditorProps) => JSX.Element;
export {};
