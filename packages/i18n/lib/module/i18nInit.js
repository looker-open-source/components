import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import i18next from 'i18next';
export const i18nInitOptions = {
  fallbackLng: 'en',
  initImmediate: false,
  interpolation: {
    escapeValue: false
  },
  keySeparator: false,
  lng: 'en',
  missingKeyHandler: (languages, ns, key) => {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`Missing i18n key (${languages.join(', ')}): "${key}" in ${ns}`);
    }
  },
  nsSeparator: false,
  saveMissing: true
};
export const i18nUpdate = ({
  resources,
  locale
}) => {
  if (resources) {
    Object.keys(resources).forEach(lng => {
      const allNamespaces = resources[lng];
      Object.keys(allNamespaces).forEach(ns => {
        i18next.addResourceBundle(lng, ns, allNamespaces[ns]);
      });
    });
  }
  if (locale && locale !== i18next.language) {
    i18next.changeLanguage(locale);
  }
};
export async function i18nInit(options) {
  if (i18next.isInitialized) {
    i18nUpdate(options);
  }
  i18next.init(_objectSpread(_objectSpread({}, i18nInitOptions), {}, {
    lng: options.locale,
    resources: options.resources
  }));
  return i18next;
}
//# sourceMappingURL=i18nInit.js.map