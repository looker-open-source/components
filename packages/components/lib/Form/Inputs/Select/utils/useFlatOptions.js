import { useMemo } from 'react';
export const getFlatOptions = options => options.reduce((acc, option) => {
  const optionAsGroup = option;

  if (optionAsGroup.options) {
    const groupPseudoOptions = [{}];

    if (optionAsGroup.label) {
      groupPseudoOptions.push({
        label: optionAsGroup.label
      });
    }

    return {
      flatOptions: [...acc.flatOptions, ...groupPseudoOptions, ...optionAsGroup.options],
      navigationOptions: [...acc.navigationOptions, ...optionAsGroup.options]
    };
  }

  return {
    flatOptions: [...acc.flatOptions, option],
    navigationOptions: [...acc.navigationOptions, option]
  };
}, {
  flatOptions: [],
  navigationOptions: []
});
export const useFlatOptions = options => {
  return useMemo(() => {
    if (!options) return {
      flatOptions: undefined,
      navigationOptions: undefined
    };
    return getFlatOptions(options);
  }, [options]);
};
//# sourceMappingURL=useFlatOptions.js.map