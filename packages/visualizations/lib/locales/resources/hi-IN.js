import merge from 'lodash/merge';
import { hiIN as visAdapterLocales } from '@looker/visualizations-adapters';
import { hiIN as visTableLocales } from '@looker/visualizations-table';
import { hiIN as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'क्वेरी घटक में कोई चिल्ड्रन पास नहीं हुआ',
    'Query component received both dashboard and query props': 'क्वेरी कंपोनेंट को डैशबोर्ड और क्वेरी प्रॉप्स दोनों प्राप्त हुए'
  },
  QueryError: {
    Error: 'त्रुटि'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "'दिनांक' प्रकार के माप वर्तमान में समर्थित नहीं हैं",
    'No chart found for type "{{type}}"': '"{{type}}" प्रकार के लिए कोई चार्ट नहीं मिला'
  }
};
export const hiIN = {
  locale: 'hi-IN',
  resources: {
    'hi-IN': merge({}, resources, visAdapterLocales.resources['hi-IN'], visTableLocales.resources['hi-IN'], visVisxLocales.resources['hi-IN'])
  }
};
//# sourceMappingURL=hi-IN.js.map