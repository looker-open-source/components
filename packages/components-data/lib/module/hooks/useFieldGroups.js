import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["explore"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useExplore } from './useExplore';
const groupFields = fields => {
  if (!fields) return {};
  return fields.reduce((acc, dimension) => {
    const {
      view
    } = dimension;
    if (!view) return acc;
    if (!acc[view]) {
      acc[view] = [];
    }
    acc[view].push(dimension);
    return acc;
  }, {});
};

export const useFieldGroups = id => {
  const _useExplore = useExplore(id),
    {
      explore
    } = _useExplore,
    rest = _objectWithoutProperties(_useExplore, _excluded);
  const {
    fields
  } = explore || {};
  const fieldGroups = fields !== null && fields !== void 0 && fields.dimensions ? groupFields(fields === null || fields === void 0 ? void 0 : fields.dimensions) : {};
  return _objectSpread({
    fieldGroups
  }, rest);
};
//# sourceMappingURL=useFieldGroups.js.map