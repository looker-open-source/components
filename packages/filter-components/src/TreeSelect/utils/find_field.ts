/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  ILookmlModelExploreField,
  ILookmlModelExplore,
} from '@looker/sdk';

/**
 * Finds and returns field data given a name and an explore
 * @param name the name of the field
 * @param explore the explore containing the field
 * @returns the ILookmlModelExploreField if found or undefined
 */
export const findField = (name: string, explore?: ILookmlModelExplore) => {
  if (name === '' || !explore || !explore.fields) return undefined;
  const { fields } = explore;
  let result: ILookmlModelExploreField | undefined;
  const matchName = (field: ILookmlModelExploreField) => field.name === name;

  let k: keyof typeof fields;
  for (k in fields) {
    const fieldsList = fields[k];
    if (result) {
      break;
    } else if (fieldsList) {
      result = fieldsList.find(matchName);
    }
  }
  return result;
};
