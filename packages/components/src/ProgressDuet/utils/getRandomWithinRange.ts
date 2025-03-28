/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const getRandomWithinRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
