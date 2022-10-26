"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PrefaceIcon = exports.Preface = exports.NoOptions = exports.NoIndicatorMulti = exports.Loading = exports.KitchenSink = exports.Icons = exports.GroupsMulti = exports.Groups = exports.DetailMulti = exports.Detail = exports.DescriptionMulti = exports.DescriptionIcon = exports.Description = exports.BasicMulti = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@styled-icons/material");

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Combobox = require("../../Combobox");

var _Icon = require("../../../../Icon");

var _SelectOptions = require("../SelectOptions");

var _useFlatOptions = require("../utils/useFlatOptions");

var _options = require("./options");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  var optionProps = (0, _useFlatOptions.useFlatOptions)(args.options);
  return _react["default"].createElement(_Combobox.ComboboxContext.Provider, {
    value: {
      data: {
        navigationOption: {
          value: 'cheddar'
        },
        option: {
          value: 'swiss'
        }
      },
      listClientRect: {
        height: 1000
      },
      listScrollPosition: 0
    }
  }, _react["default"].createElement(_Combobox.ComboboxUl, {
    isMulti: false,
    height: "100%"
  }, _react["default"].createElement(_SelectOptions.SelectOptions, (0, _extends2["default"])({}, args, optionProps))));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  options: _options.cheeseOptions
};
var Icons = Template.bind({});
exports.Icons = Icons;
Icons.args = {
  options: _options.iconOptions
};
var Detail = Template.bind({});
exports.Detail = Detail;

var detailOptions = _options.cheeseOptions.map(function (option) {
  return _objectSpread(_objectSpread({}, option), {}, {
    detail: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Favorite, null)
    }), _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Favorite, null)
    }), _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Favorite, null)
    }))
  });
});

Detail.args = {
  options: detailOptions
};
var Description = Template.bind({});
exports.Description = Description;

var descriptionOptions = _options.cheeseOptions.map(function (option) {
  return _objectSpread(_objectSpread({}, option), {}, {
    description: "I'm a little teapot"
  });
});

Description.args = {
  options: descriptionOptions
};
var DescriptionIcon = Template.bind({});
exports.DescriptionIcon = DescriptionIcon;
DescriptionIcon.args = {
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      description: "I'm a little teapot",
      icon: _react["default"].createElement(_material.Create, null)
    });
  })
};
var Preface = Template.bind({});
exports.Preface = Preface;
Preface.args = {
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      preface: 'Preface Text'
    });
  })
};
var PrefaceIcon = Template.bind({});
exports.PrefaceIcon = PrefaceIcon;
PrefaceIcon.args = {
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      icon: _react["default"].createElement(_material.Create, null),
      preface: 'Preface Text'
    });
  })
};
var Groups = Template.bind({});
exports.Groups = Groups;
Groups.args = {
  options: _options.optionsWithGroups
};
var KitchenSink = Template.bind({});
exports.KitchenSink = KitchenSink;
KitchenSink.args = {
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      description: "I'm a little teapot",
      detail: '0/50',
      icon: _react["default"].createElement(_material.Favorite, null),
      preface: 'Preface Text'
    });
  })
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isLoading: true
});
Loading.parameters = {
  storyshots: {
    disable: true
  }
};
var NoOptions = Template.bind({});
exports.NoOptions = NoOptions;

var TemplateMulti = function TemplateMulti(args) {
  var optionProps = (0, _useFlatOptions.useFlatOptions)(args.options);
  return _react["default"].createElement(_Combobox.ComboboxMultiContext.Provider, {
    value: {
      data: {
        navigationOption: {
          value: 'cheddar'
        },
        options: [{
          value: 'swiss'
        }]
      },
      listClientRect: {
        height: 1000
      },
      listScrollPosition: 0
    }
  }, _react["default"].createElement(_Combobox.ComboboxUl, {
    isMulti: true,
    height: "100%"
  }, _react["default"].createElement(_SelectOptions.SelectOptions, (0, _extends2["default"])({}, args, optionProps))));
};

var BasicMulti = TemplateMulti.bind({});
exports.BasicMulti = BasicMulti;
BasicMulti.args = {
  isMulti: true,
  options: _options.cheeseOptions
};
var DetailMulti = TemplateMulti.bind({});
exports.DetailMulti = DetailMulti;
DetailMulti.args = {
  isMulti: true,
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      detail: '0/50'
    });
  })
};
var DescriptionMulti = TemplateMulti.bind({});
exports.DescriptionMulti = DescriptionMulti;
DescriptionMulti.args = {
  isMulti: true,
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      description: "I'm a little teapot"
    });
  })
};
var GroupsMulti = TemplateMulti.bind({});
exports.GroupsMulti = GroupsMulti;
GroupsMulti.args = {
  isMulti: true,
  options: _options.optionsWithGroups
};
var NoIndicatorMulti = TemplateMulti.bind({});
exports.NoIndicatorMulti = NoIndicatorMulti;
NoIndicatorMulti.args = {
  isMulti: true,
  options: _options.cheeseOptions.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      indicator: false
    });
  })
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _SelectOptions.SelectOptions,
  title: 'SelectOptions'
};
exports["default"] = _default;
//# sourceMappingURL=SelectOptions.stories.js.map