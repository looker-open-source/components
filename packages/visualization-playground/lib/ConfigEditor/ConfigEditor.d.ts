import type { FC, Dispatch, SetStateAction } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
import type { QueryProps } from '@looker/visualizations';
declare type ConfigEditorProps = {
    config: Partial<CAll>;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
} & Pick<QueryProps, 'dashboard' | 'query'>;
export declare const ConfigEditor: FC<ConfigEditorProps>;
export {};
