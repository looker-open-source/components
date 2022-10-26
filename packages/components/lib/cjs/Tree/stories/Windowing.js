"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Windowing = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../../Button");

var _Form = require("../../Form");

var _Layout = require("../../Layout");

var _utils = require("../../utils");

var _2 = require("..");

var _generateBorderRadius = require("../utils/generateBorderRadius");

var _FieldPickerItem = require("../../LkFieldTree/stories/FieldPickerItem");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var BorderRadiusOverrideTree = (0, _styledComponents["default"])(_2.Tree).withConfig({
  displayName: "Windowing__BorderRadiusOverrideTree",
  componentId: "sc-ioe9ok-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return (0, _generateBorderRadius.generateBorderRadius)('medium', theme);
});

var getRandomInteger = function getRandomInteger(limit) {
  return Math.floor(Math.random() * limit);
};

var preamble = "We the People of the United States, in Order to form a more perfect Union,\nestablish Justice, insure domestic Tranquility, provide for the common\ndefense, promote the general Welfare, and secure the Blessings of Liberty\nto ourselves and our Posterity, do ordain and establish this Constitution\nfor the United States of America.";

var getString = function getString() {
  var lengthLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var startLimit = preamble.length - 50;
  var length = getRandomInteger(lengthLimit);
  var startIndex = getRandomInteger(startLimit);
  return preamble.substr(startIndex, length);
};

var getItems = function getItems(prefix, labelLength) {
  var canNest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return Array.from(Array(10), function (_, i) {
    if (canNest && i % 3 === 2) {
      var labelText = labelLength ? ": ".concat(getString()) : '';
      return {
        content: _react["default"].createElement(BorderRadiusOverrideTree, {
          label: "".concat(prefix, "-").concat(i).concat(labelText)
        }),
        isOpen: true,
        items: getItems("".concat(prefix, "-").concat(i), labelLength)
      };
    }

    var itemText = labelLength ? ": ".concat(getString(labelLength)) : '';
    return {
      content: _react["default"].createElement(_FieldPickerItem.FieldPickerItem, null, prefix, "-", i, itemText)
    };
  });
};

var getTrees = function getTrees(labelLength) {
  return Array.from(Array(100), function (_, i) {
    var labelText = labelLength ? ": ".concat(getString()) : '';
    return {
      content: _react["default"].createElement(BorderRadiusOverrideTree, {
        label: "".concat(i).concat(labelText)
      }),
      isOpen: true,
      items: getItems(String(i), labelLength, true)
    };
  });
};

var treesRandomText = getTrees(50);
var treesNoText = getTrees(0);

var getUpdater = function getUpdater(isOpen) {
  return function (tree) {
    if (tree.items) {
      return _objectSpread(_objectSpread({}, tree), {}, {
        isOpen: isOpen,
        items: tree.items.map(getUpdater(isOpen))
      });
    }

    return _objectSpread(_objectSpread({}, tree), {}, {
      isOpen: isOpen
    });
  };
};

var Windowing = function Windowing(_ref2) {
  var noText = _ref2.noText;

  var _useToggle = (0, _utils.useToggle)(),
      value = _useToggle.value,
      toggle = _useToggle.toggle,
      setOn = _useToggle.setOn;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      term = _useState2[0],
      setTerm = _useState2[1];

  var handleChange = function handleChange(e) {
    setTerm(e.currentTarget.value);

    if (term === '' && e.currentTarget.value !== '') {
      setOn();
    }
  };

  var treesUpdated = (0, _react.useMemo)(function () {
    var trees = noText ? treesNoText : treesRandomText;
    return trees.map(getUpdater(value));
  }, [noText, value]);
  return _react["default"].createElement(_Layout.SpaceVertical, {
    height: "100vh"
  }, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Toggle all ", value ? 'closed' : 'open'), _react["default"].createElement(_Form.InputText, {
    value: term,
    onChange: handleChange
  })), _react["default"].createElement(_FieldPickerItem.HighlightContext.Provider, {
    value: {
      term: term
    }
  }, _react["default"].createElement(_2.WindowedTreeCollection, {
    density: -3,
    height: "100%",
    width: "450px",
    trees: treesUpdated
  })));
};

exports.Windowing = Windowing;
Windowing.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Windowing.js.map