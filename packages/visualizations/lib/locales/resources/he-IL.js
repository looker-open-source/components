import merge from 'lodash/merge';
import { heIL as visAdapterLocales } from '@looker/visualizations-adapters';
import { heIL as visTableLocales } from '@looker/visualizations-table';
import { heIL as visVisxLocales } from '@looker/visualizations-visx';
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
export const heIL = {
  locale: 'he-IL',
  resources: {
    'he-IL': merge({}, resources, visAdapterLocales.resources['he-IL'], visTableLocales.resources['he-IL'], visVisxLocales.resources['he-IL'])
  }
};
//# sourceMappingURL=he-IL.js.map