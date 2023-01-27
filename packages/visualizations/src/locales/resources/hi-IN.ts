/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { hiIN as componentsLocale } from '@looker/components'
import { hiIN as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { hiIN as visualizationstableLocale } from '@looker/visualizations-table'
import { hiIN as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'क्वेरी घटक में कोई चिल्ड्रन पास नहीं हुआ',
    'Query component received both dashboard and query props':
      'क्वेरी कंपोनेंट को डैशबोर्ड और क्वेरी प्रॉप्स दोनों प्राप्त हुए',
  },
  QueryError: {
    Error: 'त्रुटि',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      "'तारीख' प्रकार के माप वर्तमान में समर्थित नहीं हैं",
    'No chart found for type "{{type}}"':
      '"{{type}}" प्रकार के लिए कोई चार्ट नहीं मिला',
  },
}

export const hiIN = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'hi-IN',
  resources
)
