"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heIL = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
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
var heIL = (0, _i18n.mergeLocaleObjects)([_components.heIL, _visualizationsAdapters.heIL, _visualizationsTable.heIL, _visualizationsVisx.heIL], 'he-IL', resources);
exports.heIL = heIL;
//# sourceMappingURL=he-IL.js.map