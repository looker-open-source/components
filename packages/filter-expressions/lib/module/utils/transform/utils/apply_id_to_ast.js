import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const applyId = root => {
  let id = 0;
  const traverse = node => {
    const {
      left,
      right
    } = node;
    let newLeft, newRight;
    if (left) {
      newLeft = traverse(left);
    }
    id += 1;
    const newNode = _objectSpread(_objectSpread({}, node), {}, {
      id
    });
    if (right) {
      newRight = traverse(right);
    }
    return _objectSpread(_objectSpread({}, newNode), {}, {
      left: newLeft,
      right: newRight
    });
  };
  return traverse(root);
};
export default applyId;
//# sourceMappingURL=apply_id_to_ast.js.map