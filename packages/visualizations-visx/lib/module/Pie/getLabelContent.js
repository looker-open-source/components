

import numeral from 'numeral';
export const getLabelContent = (measureTotal, data, legendConfig) => {
  const {
    value = 'label_percent'
  } = legendConfig || {};
  const [key, val] = Object.entries(data)[0];
  const percent = numeral(val / measureTotal).format('0.00%');
  const labels = {
    label: key,
    value: String(val),
    percent,
    label_value: `${key} \u2013 ${val}`,
    label_percent: `${key} \u2013 ${percent}`
  };
  return labels[value];
};
//# sourceMappingURL=getLabelContent.js.map