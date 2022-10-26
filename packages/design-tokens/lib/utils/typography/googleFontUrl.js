import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["family", "italic"];
const googleFontsBaseUrl = 'https://fonts.googleapis.com/css2';
export const googleFontParam = _ref => {
  let {
    family,
    italic = true
  } = _ref,
      font = _objectWithoutProperties(_ref, _excluded);

  let uri = `${family.replace(/"/g, '').replace(/ /g, '+')}:`;
  let weights = font.weights.map(weight => `0,${weight}`);

  if (italic) {
    const italicizedWeights = font.weights.map(weight => `1,${weight}`);
    weights = [...weights, ...italicizedWeights];
    uri += 'ital,';
  }

  uri += `wght@${weights.join(';')}`;
  return uri;
};
export const googleFontUrl = theme => {
  const url = new URL(googleFontsBaseUrl);
  const weights = Object.values(theme.fontWeights);
  const fonts = Object.values(theme.fonts).map(family => {
    return {
      family: family.split(',')[0].replace(/'/g, ''),
      weights
    };
  });
  const search = fonts.map(font => `family=${googleFontParam(font)}`);
  search.push('display=swap');
  url.search = search.join('&');
  return url.toString();
};
//# sourceMappingURL=googleFontUrl.js.map