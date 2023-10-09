/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { plPL as componentsLocale } from '@looker/components';
import { plPL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Naciśnij Shift i kliknij, aby posortować dodatkowe kolumny',
    'Sort ascending': 'Sortuj rosnąco',
    'Sort descending': 'Sortuj malejąco',
    Totals: 'Sumy',
  },
};

export const plPL = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'pl-PL',
  resources
);
