/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// find the string with the most characters from a flat array of strings
export const pickLongestLabel = (labels: string[]) =>
  labels.reduce((longestLabel, label) => {
    return label.length > longestLabel.length ? label : longestLabel
  }, '')
