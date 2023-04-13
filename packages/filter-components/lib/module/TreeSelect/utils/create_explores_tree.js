import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { getExpressionTypeFromField } from '@looker/filter-expressions';
const getID = (parentId, value, index) => `${parentId}.${value}_${index}`;

export const createExploresTree = explores => explores.map((explore, index) => {
  var _explore$fields, _explore$fields2;
  const fields = Object.values(explore.fields && explore.fields.dimensions || {}).concat(Object.values(((_explore$fields = explore.fields) === null || _explore$fields === void 0 ? void 0 : _explore$fields.parameters) || {})).concat(Object.values(((_explore$fields2 = explore.fields) === null || _explore$fields2 === void 0 ? void 0 : _explore$fields2.filters) || {})).concat(Object.values(explore.fields && explore.fields.measures || {})).filter(f => f.can_filter && !f.hidden);
  const value = explore.label || explore.title || '';
  const id = getID('', value, index);
  return {
    detail: explore.group_label || explore.model_name || undefined,
    payload: {
      explore: explore.name,
      model: explore.model_name
    },
    isNotHighlightable: true,
    value,
    id,
    isOpen: false,
    children: Object.values(fields.reduce(buildFieldHierarchy(explore), {})).map(convertChildrenToArrays(id))
  };
});

const buildFieldHierarchy = explore => (acc, dim) => _objectSpread(_objectSpread({}, acc), {}, {
  [dim.view_label]: _objectSpread(_objectSpread({}, acc[dim.view_label]), {}, {
    value: dim.view_label,
    children: dim.field_group_label ? acc[dim.view_label] && acc[dim.view_label].children ? _objectSpread(_objectSpread({}, acc[dim.view_label].children), {}, {
      [dim.field_group_label]: _objectSpread(_objectSpread({}, acc[dim.view_label].children[dim.field_group_label]), {}, {
        value: dim.field_group_label,
        children: _objectSpread(_objectSpread({}, acc[dim.view_label].children[dim.field_group_label] && acc[dim.view_label].children[dim.field_group_label].children), {}, {
          [dim.name]: fieldData(dim, explore)
        })
      })
    }) : {
      [dim.field_group_label]: {
        value: dim.field_group_label,
        children: {
          [dim.name]: fieldData(dim, explore)
        }
      }
    } : _objectSpread(_objectSpread({}, acc[dim.view_label] && acc[dim.view_label].children), {}, {
      [dim.name]: fieldData(dim, explore)
    })
  })
});

const convertChildrenToArrays = parentId => (_ref, itemIndex) => {
  let {
      children
    } = _ref,
    item = _objectWithoutProperties(_ref, _excluded);
  const itemID = getID(parentId, item.value, itemIndex);
  return _objectSpread(_objectSpread({}, item), {}, {
    id: itemID,
    isOpen: false
  }, children ? {
    children: Object.values(children).map(convertChildrenToArrays(itemID))
  } : {});
};

const fieldData = (field, explore) => ({
  value: field.label_short,
  isSecondary: field.measure,
  payload: {
    field: field.name,
    suggestDimension: field.suggest_dimension,
    model: explore.model_name,
    explore: explore.name,
    view: field.view,
    suggestExplore: field.suggest_explore || explore.name,
    enumerations: field.enumerations,
    type: getExpressionTypeFromField(field),
    fieldOptions: field
  }
});
//# sourceMappingURL=create_explores_tree.js.map