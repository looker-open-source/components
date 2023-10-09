/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
export declare const useSelectManager: (possibilities: string[], defaultSelections?: string[]) => {
    onSelect: (selectionId: string) => void;
    onSelectAll: () => void;
    selections: string[];
    setSelections: import("react").Dispatch<import("react").SetStateAction<string[]>>;
};
