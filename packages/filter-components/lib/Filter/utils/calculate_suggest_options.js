import difference from 'lodash/difference';
import find from 'lodash/find';
import isArray from 'lodash/isArray';
import map from 'lodash/map';
import take from 'lodash/take';
import union from 'lodash/union';
import nth from 'lodash/nth';
import pull from 'lodash/pull';
export const calculateSuggestOptions = filterTokenProps => {
  const {
    max,
    options,
    value: values
  } = filterTokenProps;

  if (!isArray(values) || !find(values, val => typeof val === 'string')) {
    return max ? take(options, max) : options;
  }

  const existingValues = map(values, v => find(options, {
    value: v
  }) || {
    value: v,
    label: v
  }) || [];

  if (max) {
    if (existingValues.length >= max) {
      return take(existingValues, max);
    } else {
      const suggestionOptions = [];

      for (let optionIndex = 0; optionIndex < max - existingValues.length; optionIndex++) {
        const option = nth(options, optionIndex);

        if (!option) {
          break;
        }

        pull(existingValues, option);
        suggestionOptions.push(option);
      }

      return union(suggestionOptions, existingValues);
    }
  } else {
    const unfoundValues = difference(existingValues, options) || [];
    return union(options, unfoundValues);
  }
};
//# sourceMappingURL=calculate_suggest_options.js.map