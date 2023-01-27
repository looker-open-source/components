/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * This function is escapes leading and trailing spaces with a caret for the
 * given string. Trailing spaces are doubly escaped.
 *
 * Double escape param is true when the filter type is matches, but false for "like" filters
 * as they
 */
export declare const escapeLeadingAndTrailingWhitespaces: (value: string, doubleEscapeLastEscapedTrailingSpace?: boolean) => string;
