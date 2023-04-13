/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SizeLarge, SizeMedium, SizeNone, SizeSmall, SizeXSmall } from './size';
export declare type RadiusSizes = SizeNone | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export declare type Radii = Record<RadiusSizes, string>;
