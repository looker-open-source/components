/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { IUserAttributeWithValue } from '@looker/sdk';

export interface UserAttributeValueMap {
  [key: string]: IUserAttributeWithValue[];
}
