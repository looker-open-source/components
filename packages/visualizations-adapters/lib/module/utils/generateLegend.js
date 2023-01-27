

import map from 'lodash/map';
import get from 'lodash/get';
import { DEFAULT_EMPTY_FIELDS } from '.';
const ENDASH = '\u2013';
export const generateLegend = (fields = DEFAULT_EMPTY_FIELDS, config) => {
  const defaultDimensionLabel = map(fields.dimensions, d => d.label).join(` ${ENDASH} `);
  const defaultMeasureLabel = map(fields.measures, m => m.label).join(` ${ENDASH} `);
  return {
    dimension: get(config, 'x_axis_label', defaultDimensionLabel),
    measure: get(config, 'y_axes[0].label', defaultMeasureLabel)
  };
};
//# sourceMappingURL=generateLegend.js.map