"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowedTreeNode = exports.WindowedTreeContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _TreeCollectionContext = require("./TreeCollectionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var WindowedTreeContext = (0, _react.createContext)({
  partialRender: false
});
exports.WindowedTreeContext = WindowedTreeContext;

var WindowedTreeNode = function WindowedTreeNode(_ref) {
  var content = _ref.content,
      firstIDinWindow = _ref.firstIDinWindow,
      id = _ref.id,
      items = _ref.items;
  var context = (0, _react.useContext)(_TreeCollectionContext.TreeCollectionContext);
  var toggleNode = (0, _react.useCallback)(function (isOpen) {
    var _context$toggleNode;

    (_context$toggleNode = context.toggleNode) === null || _context$toggleNode === void 0 ? void 0 : _context$toggleNode.call(context, id, isOpen);
  }, [context, id]);

  if (items && (0, _react.isValidElement)(content)) {
    var _context$toggleStateM, _context$toggleStateM2;

    var props = {
      children: items.map(function (item) {
        return _react["default"].createElement(WindowedTreeNode, (0, _extends2["default"])({
          firstIDinWindow: firstIDinWindow
        }, item, {
          key: item.id
        }));
      })
    };

    var _isOpen = (_context$toggleStateM = context.toggleStateMap) === null || _context$toggleStateM === void 0 ? void 0 : (_context$toggleStateM2 = _context$toggleStateM[id]) === null || _context$toggleStateM2 === void 0 ? void 0 : _context$toggleStateM2.isOpen;

    return _react["default"].createElement(WindowedTreeContext.Provider, {
      value: {
        density: context.density,
        isOpen: _isOpen,
        partialRender: firstIDinWindow ? id < firstIDinWindow : false,
        toggleNode: toggleNode
      }
    }, (0, _react.cloneElement)(content, props));
  }

  return content;
};

exports.WindowedTreeNode = WindowedTreeNode;
//# sourceMappingURL=WindowedTreeNode.js.map