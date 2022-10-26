import { getComboboxText } from '@looker/components';

const createOption = value => ({
  value,
  label: value
});

export const createOptions = values => {
  if (!values) return [];
  const valuesArray = !Array.isArray(values) ? [values] : values;
  return valuesArray.map(value => createOption(value));
};
export const createEnumeration = (isParameter = false) => e => ({
  label: e.label,
  value: isParameter ? unescapeParameterValue(e.value) : String(e.value)
});

const unescapeParameterValue = value => String(value).replace(/^\^([-])/, '$1').replace(/\^([_%,"'])/g, '$1');

export const filterOptions = (options, filterTerm, excludedValues) => {
  if (!excludedValues && (!filterTerm || filterTerm === '')) return options;
  return options.filter(option => filterOption(option, filterTerm || '', excludedValues));
};

const filterOption = (option, filterTerm, excludedValues) => {
  let matchesFilter = true;

  if (filterTerm !== '') {
    const filterText = filterTerm.trim().toLowerCase();
    const optionText = getComboboxText(option).trim().toLowerCase();
    matchesFilter = optionText.indexOf(filterText) > -1;
  }

  return excludedValues ? matchesFilter && !excludedValues.includes(option.value) : matchesFilter;
};
//# sourceMappingURL=option_utils.js.map