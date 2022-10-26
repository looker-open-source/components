/// <reference types="react" />
import type { ValidationType } from '@looker/components';
export declare type MidInputLabelProps = {
    children: string;
    className?: string;
    validationType?: ValidationType;
};
export declare const MidInputLabel: import("styled-components").StyledComponent<({ validationType, ...props }: MidInputLabelProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
