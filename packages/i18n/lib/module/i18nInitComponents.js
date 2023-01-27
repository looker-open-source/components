import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import i18next from 'i18next';
import enDate from 'date-fns/locale/en-US';
import { initReactI18next } from 'react-i18next';
import { i18nInitOptions, i18nUpdate } from './i18nInit';
export const i18nInitOptionsComponents = _objectSpread(_objectSpread({}, i18nInitOptions), {}, {
  react: {
    useSuspense: false
  }
});

let dateLocale = enDate;
const setDateLocale = _dateLocale => {
  if (_dateLocale) {
    dateLocale = _dateLocale;
  }
};
export const getDateLocale = () => {
  return dateLocale;
};

export async function i18nInitComponents({
  locale,
  resources,
  dateLocale
}) {
  setDateLocale(dateLocale);
  if (i18next.isInitialized) {
    i18nUpdate({
      locale,
      resources
    });
    return i18next;
  } else {
    return i18next.use(initReactI18next).init(_objectSpread(_objectSpread({}, i18nInitOptionsComponents), {}, {
      lng: locale,
      resources
    }));
  }
}
//# sourceMappingURL=i18nInitComponents.js.map