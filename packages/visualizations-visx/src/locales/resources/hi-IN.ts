/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/hi'
import { hiIN as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      '{{totalPages}} में से {{page}} लीजेंड पेज',
  },
  PieLegendControls: {
    'Next page': 'अगला पेज',
    'Previous page': 'पिछला पेज',
  },
  XYTooltip: {
    'Points sized by': 'आकार के आधार पर पॉइंट',
  },
}

export const hiIN = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'hi-IN',
  resources,
  dateLocale
)
