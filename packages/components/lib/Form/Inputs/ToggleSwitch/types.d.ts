/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ValidationType } from '../../ValidationMessage';
export declare type SwitchProps = {
    on?: boolean;
    validationType?: ValidationType;
};
export declare type SwitchElementProps = SwitchProps & CompatibleHTMLProps<HTMLDivElement>;
