/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ComponentSettingsDefaults } from './types';
export declare const generateDefaults: (theme: ComponentSettingsDefaults, custom?: Partial<ComponentSettingsDefaults> | undefined) => {
    brandAnimation: boolean;
    density: import("..").DensityRamp;
    externalLabel: boolean;
};
