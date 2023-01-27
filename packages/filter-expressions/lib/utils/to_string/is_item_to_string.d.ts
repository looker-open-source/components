/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Converts the 'is' value to string filter expression
 * 'is' is a prefix for the expression value, blank for true and 'not ' for false
 */
declare const isItemToString: (is?: boolean, yes?: string, no?: string) => string;
export default isItemToString;
