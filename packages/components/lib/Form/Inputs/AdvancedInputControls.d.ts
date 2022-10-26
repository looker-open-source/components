import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { MouseEvent } from 'react';
export interface AdvancedInputControlsProps extends CompatibleHTMLProps<HTMLDivElement> {
    /**
     * customize the tooltip on the clear icon
     */
    clearIconLabel?: string;
    isVisibleOptions?: boolean;
    onClear: (e: MouseEvent<HTMLButtonElement>) => void;
    showCaret?: boolean;
    showClear: boolean;
    summary?: string;
    /**
     * Display the error icon
     */
    errorIcon?: boolean;
}
export declare const AdvancedInputControls: import("styled-components").StyledComponent<(props: AdvancedInputControlsProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
