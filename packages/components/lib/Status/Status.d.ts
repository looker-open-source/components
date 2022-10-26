import type { TFunction } from 'i18next';
import React from 'react';
import type { IconProps } from '../Icon';
export declare type StatusIntent = 'critical' | 'inform' | 'neutral' | 'positive' | 'warn';
export interface StatusProps extends Pick<IconProps, 'className' | 'size' | 'title'> {
    /**
     * @default neutral
     */
    intent?: StatusIntent;
}
export declare const getIntentLabel: (t: TFunction, intent?: StatusIntent | undefined) => string | undefined;
export declare const Status: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<StatusProps & React.RefAttributes<SVGSVGElement>>, import("styled-components").DefaultTheme, StatusProps, never>;
