/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { CompatibleHTMLProps, FontSizeProps, FontWeightProps } from '@looker/design-tokens';
import type { SpaceHelperProps } from '../../Layout/Space';
export declare type ModalHeaderProps = CompatibleHTMLProps<HTMLDivElement> & SpaceHelperProps & FontSizeProps & FontWeightProps & {
    children: ReactNode;
    /**
     * Usually used as a closing button this element is displayed on the right side of the component
     */
    detail?: ReactNode | string;
};
export declare const ModalHeader: import("styled-components").StyledComponent<({ children, detail, fontSize, fontWeight, id, ...props }: ModalHeaderProps) => JSX.Element, import("styled-components").DefaultTheme, CompatibleHTMLProps<HTMLDivElement> & SpaceHelperProps & FontSizeProps & FontWeightProps & {
    children: ReactNode;
    /**
     * Usually used as a closing button this element is displayed on the right side of the component
     */
    detail?: ReactNode | string;
}, never>;
