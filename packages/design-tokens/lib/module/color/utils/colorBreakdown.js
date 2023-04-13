

import chunk from 'lodash/chunk';
import { coreColors, derivativeColors, intentColors, specifiableTextColors, textColors, uiColors } from '../';
export const colorBreakdown = colors => {
  const divided = {
    core: {},
    derivative: {},
    intent: {},
    specializedText: {},
    stateful: {},
    text: {},
    ui: {}
  };
  for (const [key, value] of Object.entries(colors)) {
    if (coreColors.includes(key)) {
      if (key !== 'pageBackground') {
        divided.core[key] = value;
      }
    } else if (intentColors.includes(key)) {
      divided.intent[key] = value;
    } else if (derivativeColors.includes(key)) {
      divided.derivative[key] = value;
    } else if (textColors.includes(key)) {
      divided.text[key] = value;
    } else if (uiColors.includes(key)) {
      divided.ui[key] = value;
    } else if (specifiableTextColors.includes(key)) {
      divided.specializedText[key] = value;
    } else {
      divided.stateful[key] = value;
    }
  }
  const statefulColorGroups = chunk(Object.entries(divided.stateful), 7).map(chunk => {
    const obj = {};
    chunk.forEach(([name, color]) => obj[name] = color);
    return obj;
  });
  return {
    divided,
    statefulColorGroups
  };
};
//# sourceMappingURL=colorBreakdown.js.map