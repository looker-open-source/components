import type { FC, ReactNode } from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { SpaceHelperProps } from '../../Layout/Space';
export interface ModalFooterProps extends CompatibleHTMLProps<HTMLDivElement>, SpaceHelperProps {
    /**
     *
     */
    children: ReactNode;
    /**
     * Secondary content to place in the footer
     */
    secondary?: ReactNode;
}
export declare const ModalFooter: import("styled-components").StyledComponent<FC<ModalFooterProps>, import("styled-components").DefaultTheme, {}, never>;
