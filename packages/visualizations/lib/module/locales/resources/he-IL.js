

import { heIL as componentsLocale } from '@looker/components';
import { heIL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { heIL as visualizationstableLocale } from '@looker/visualizations-table';
import { heIL as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Query: {
    'No children passed to Query component': 'לא הועברו רכיבים "ילדים" של רכיב השאילתה',
    'Query component received both dashboard and query props': 'רכיב השאילתה קיבל את אביזרי השאילתה והדשבורד'
  },
  QueryError: {
    Error: 'שגיאה'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "מדדים מסוג 'תאריך' אינם נתמכים כרגע",
    'No chart found for type "{{type}}"': 'לא נמצאה טבלה עבור הסוג "{{type}}"'
  }
};
export const heIL = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'he-IL', resources);
//# sourceMappingURL=he-IL.js.map