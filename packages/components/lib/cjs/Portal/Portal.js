"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPortalRoot = exports.Portal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var rootId = 'modal-root';

var getPortalRoot = function getPortalRoot() {
  var existing = document.getElementById(rootId);

  if (existing) {
    return existing;
  } else {
    var newElement = document.createElement('div');
    newElement.id = 'modal-root';
    document.body.appendChild(newElement);
    return newElement;
  }
};

exports.getPortalRoot = getPortalRoot;
var Portal = (0, _react.forwardRef)(function (props, ref) {
  var el = (0, _react.useRef)(document.createElement('div'));
  el.current.className = 'portal-child';
  (0, _utils.useSafeLayoutEffect)(function () {
    var root = getPortalRoot();
    if (!root) return;
    var elCurrent = el.current;
    root.appendChild(elCurrent);
    return function () {
      root.removeChild(elCurrent);
    };
  }, [el]);

  var content = _react["default"].createElement(InvisiBox, (0, _extends2["default"])({
    ref: ref
  }, props));

  return (0, _reactDom.createPortal)(content, el.current);
});
exports.Portal = Portal;
Portal.displayName = 'Portal';

var alignItems = function alignItems(_ref) {
  var vertical = _ref.vertical;

  if (vertical === 'top') {
    return 'flex-start';
  } else if (vertical === 'bottom') {
    return 'flex-end';
  } else {
    return 'center';
  }
};

var justifyContent = function justifyContent(_ref2) {
  var horizontal = _ref2.horizontal;

  if (horizontal === 'left') {
    return 'flex-start';
  } else if (horizontal === 'right') {
    return 'flex-end';
  } else {
    return 'center';
  }
};

var InvisiBox = _styledComponents["default"].div.attrs(function (_ref3) {
  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? 'looker-components-reset' : _ref3$className;
  return {
    className: className
  };
}).withConfig({
  displayName: "Portal__InvisiBox",
  componentId: "sc-8jnv99-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  align-items: ", ";\n  bottom: 0;\n  display: flex;\n  justify-content: ", ";\n  left: 0;\n  pointer-events: none;\n  position: ", ";\n  right: 0;\n  top: 0;\n  z-index: ", ";\n\n  > * {\n    pointer-events: auto;\n  }\n"])), _componentsProviders.styleDefenderCSS, alignItems, justifyContent, function (_ref4) {
  var fixed = _ref4.fixed;
  return fixed === false ? 'absolute' : 'fixed';
}, function (_ref5) {
  var zIndexFloor = _ref5.theme.zIndexFloor;
  return zIndexFloor;
});
//# sourceMappingURL=Portal.js.map