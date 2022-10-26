"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListLayoutDemo = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../..");

var _Card = require("../../../../Card");

var _Layout = require("../../../../Layout");

var _Text = require("../../../../Text");

var _2 = require("..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}];

var ListLayoutDemo = function ListLayoutDemo() {
  var _useState = (0, _react.useState)(400),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      containerWidth = _useState2[0],
      setContainerWidth = _useState2[1];

  var handleWidthChange = function handleWidthChange(e) {
    setContainerWidth(parseInt(e.currentTarget.value, 10));
  };

  return _react["default"].createElement(_Layout.SpaceVertical, {
    p: "u5"
  }, _react["default"].createElement(_Text.Heading, null, "ComboboxList width override"), _react["default"].createElement(_.Label, null, "Move slider to adjust container width:"), _react["default"].createElement(_.Slider, {
    min: 100,
    max: 1000,
    step: 10,
    value: containerWidth,
    onChange: handleWidthChange,
    width: 400
  }), _react["default"].createElement(_Card.Card, {
    p: 20,
    width: containerWidth + 40
  }, _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Heading, null, "Combobox"), _react["default"].createElement(_2.Combobox, null, _react["default"].createElement(_2.ComboboxInput, {
    placeholder: "width=500"
  }), _react["default"].createElement(_2.ComboboxList, {
    width: 500
  }, _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_2.Combobox, null, _react["default"].createElement(_2.ComboboxInput, {
    placeholder: "minWidth=420"
  }), _react["default"].createElement(_2.ComboboxList, {
    minWidth: 420
  }, _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_Text.Heading, null, "ComboboxMulti"), _react["default"].createElement(_.Label, null, "Try shrinking down the window width with the list open:"), _react["default"].createElement(_2.ComboboxMulti, null, _react["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "maxWidth=800 width=calc(100vw - 50px)"
  }), _react["default"].createElement(_2.ComboboxMultiList, {
    maxWidth: 800,
    width: "calc(100vw - 50px)"
  }, _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_2.ComboboxMulti, null, _react["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "maxHeight={100}"
  }), _react["default"].createElement(_2.ComboboxMultiList, {
    maxHeight: 100
  }, _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_Text.Heading, null, "Select"), _react["default"].createElement(_.FieldSelect, {
    label: "width=500",
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1",
    listLayout: {
      width: 500
    }
  }), _react["default"].createElement(_.FieldSelect, {
    label: "minWidth=420",
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1",
    listLayout: {
      minWidth: 420
    }
  }), _react["default"].createElement(_Text.Heading, null, "SelectMulti"), _react["default"].createElement(_.Label, null, "maxWidth=800 width=calc(100vw - 50px)"), _react["default"].createElement(_.SelectMulti, {
    options: options,
    "aria-label": "Fruits",
    defaultValues: ['1'],
    listLayout: {
      maxWidth: 800,
      width: 'calc(100vw - 50px)'
    }
  }), _react["default"].createElement(_.Label, null, "maxHeight=100"), _react["default"].createElement(_.SelectMulti, {
    options: options,
    "aria-label": "Fruits",
    defaultValues: ['1'],
    listLayout: {
      maxHeight: 100
    }
  }))));
};

exports.ListLayoutDemo = ListLayoutDemo;
ListLayoutDemo.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=ListLayout.js.map