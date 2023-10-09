/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export const sortObjectByKeys = (o: Record<string, unknown>) => {
  return Object.keys(o)
    .sort()
    .reduce((obj: Record<string, unknown>, key: string) => {
      obj[key] = o[key];
      return obj;
    }, {});
};
