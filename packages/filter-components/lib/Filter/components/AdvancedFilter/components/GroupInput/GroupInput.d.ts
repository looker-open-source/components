import type { InputTextProps } from '@looker/components';
import type { FC } from 'react';
import type { PlacementProps } from '../../../../utils/filter_styles';
export declare type GroupInputProps = InputTextProps & PlacementProps;
export declare const GroupInput: import("styled-components").StyledComponent<FC<GroupInputProps>, import("styled-components").DefaultTheme, {
    placement: "left" | "right" | "middle";
}, "placement">;
