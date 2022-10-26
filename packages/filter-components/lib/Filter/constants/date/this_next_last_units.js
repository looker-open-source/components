import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useDateUnits, useFiscalDateUnits } from './date_units';

const singularizeLabel = option => _objectSpread(_objectSpread({}, option), {}, {
  label: option.singular || option.label
});

export const useLastUnits = () => {
  const dateUnits = useDateUnits();
  return dateUnits.map(singularizeLabel);
};
export const useThisNextUnits = () => {
  const lastUnits = useLastUnits();
  return lastUnits.filter(option => ['second', 'minute', 'hour'].indexOf(option.value) === -1);
};
export const useFiscalLastUnits = () => {
  const dateUnits = useDateUnits();
  const fiscalDateUnits = useFiscalDateUnits();
  return [...dateUnits, ...fiscalDateUnits].map(singularizeLabel);
};
export const useFiscalThisNextUnits = () => {
  const thisNextUnits = useThisNextUnits();
  const fiscalDateUnits = useFiscalDateUnits();
  return [...thisNextUnits, ...fiscalDateUnits].map(singularizeLabel);
};
//# sourceMappingURL=this_next_last_units.js.map