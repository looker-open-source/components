/**
 * Copyright (c) 2024 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * 1000 - 9999 is probably too broad a range for years,
 * but there's no more reliable range.
 */
export const validateYear = (yearString: string) => {
  const year = parseInt(yearString, 10);
  if (isNaN(year)) return false;
  if (year < 1000) return false;
  if (year > 9999) return false;
  return true;
};
