"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heIL = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var heIL = {
  locale: 'he-IL',
  resources: {
    'he-IL': (0, _merge["default"])({}, resources, _visualizationsAdapters.heIL.resources['he-IL'], _visualizationsTable.heIL.resources['he-IL'], _visualizationsVisx.heIL.resources['he-IL'])
  }
};
exports.heIL = heIL;
//# sourceMappingURL=he-IL.js.map