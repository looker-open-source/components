import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config", "field", "suggestions", "enumerations"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { parseFilterExpression } from '@looker/filter-expressions';
import { getControlFilterInfo } from '.';
import noop from 'lodash/noop';
import { FilterUIDisplay, FilterUIType } from '../types/filter_ui_config';
import { isValidFilterType } from './filter_token_type_map';
export const canRenderFilter = _ref => {
  let {
    config,
    field,
    suggestions,
    enumerations
  } = _ref,
      filterProps = _objectWithoutProperties(_ref, _excluded);

  if ((config === null || config === void 0 ? void 0 : config.type) === FilterUIType.Advanced) return true;
  if (!isValidFilterType(config === null || config === void 0 ? void 0 : config.type)) return false;
  let ast;

  if ('ast' in filterProps) {
    ast = filterProps.ast;
  } else {
    ast = parseFilterExpression(filterProps.expressionType, filterProps.expression, filterProps.userAttributes);
  }

  const item = _objectSpread(_objectSpread({}, ast), {}, {
    is: true,
    left: null,
    right: null
  });

  const {
    props
  } = getControlFilterInfo(item, {
    config,
    suggestions,
    enumerations,
    field,
    changeFilter: noop,
    allowMultipleValues: true,
    name: ''
  });
  return Boolean(props);
};
export const getFallbackFilterConfig = config => (config === null || config === void 0 ? void 0 : config.type) !== FilterUIType.Advanced && (config === null || config === void 0 ? void 0 : config.display) === FilterUIDisplay.INLINE ? _objectSpread(_objectSpread({}, config), {}, {
  display: FilterUIDisplay.POPOVER,
  type: FilterUIType.Advanced
}) : _objectSpread(_objectSpread({}, config), {}, {
  type: FilterUIType.Advanced
});
//# sourceMappingURL=can_render_filter.js.map