/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Dispatch, SetStateAction } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
import type { QueryProps } from '@looker/visualizations';
declare type ConfigEditorProps = {
    config: Partial<CAll>;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
} & Pick<QueryProps, 'dashboard' | 'query'>;
export declare const ConfigEditor: ({ config: configOverrides, onConfigChange, query, dashboard, }: ConfigEditorProps) => JSX.Element;
export {};
