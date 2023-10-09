/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { frFR as componentsLocale } from '@looker/components';
import { frFR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Maintenez la touche Maj enfoncée tout en cliquant pour trier des colonnes supplémentaires',
    'Sort ascending': 'Trier par ordre croissant',
    'Sort descending': 'Trier par ordre décroissant',
    Totals: 'Totaux',
  },
};

export const frFR = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'fr-FR',
  resources
);
