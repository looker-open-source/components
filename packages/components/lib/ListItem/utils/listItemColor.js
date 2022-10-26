import { listItemColorAppliesToLabel, listItemColorOptions } from '../types';

const listItemColor = (color, disabled, defaultColor) => {
  if (disabled) {
    return 'text1';
  } else if (color) {
    if (listItemColorAppliesToLabel.includes(color)) {
      return color;
    } else if (!listItemColorOptions.includes(color)) {
      return color;
    }
  }

  return defaultColor;
};

export const listItemIconColor = (color, disabled) => listItemColor(color, disabled, 'text2');
export const listItemLabelColor = (color, disabled) => listItemColor(color, disabled, 'text5');
//# sourceMappingURL=listItemColor.js.map