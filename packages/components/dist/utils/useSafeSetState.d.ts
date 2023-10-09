/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * An alternative utility hook to React.useState, this function
 * only updates state when the parent component is mounted.
 *
 * Prevents async setState errors and memory leaks.
 * @param initialState any data needed to be stored in state
 * @returns [currentState, stateUpdater]
 */
export declare const useSafeSetState: <T>(initialState: T) => [T, (arg: T) => void];
