"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heIL = void 0;
var _he = _interopRequireDefault(require("date-fns/locale/he"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'עמוד מקרא {{page}} מתוך {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'העמוד הבא',
    'Previous page': 'העמוד הקודם'
  },
  XYTooltip: {
    'Points sized by': 'גודל הנקודות נקבע על פי'
  }
};
var heIL = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.heIL], 'he-IL', resources, _he["default"]);
exports.heIL = heIL;
//# sourceMappingURL=he-IL.js.map