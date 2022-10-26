"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Small = exports.Sizes = exports.Large = exports.IconsPairedWithText = exports.IconsInsideComponents = exports.Basic = exports.Artwork = exports.Accessibility = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _Layout = require("../Layout");

var _Text = require("../Text");

var _Icon = require("./Icon");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Icon.Icon,
  title: 'Icon'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Icon.Icon, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  icon: _react["default"].createElement(_material.Settings, null)
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  size: 'small'
});
var Large = Template.bind({});
exports.Large = Large;
Large.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  size: 'large'
});

var Accessibility = function Accessibility() {
  return _react["default"].createElement(_Layout.Space, {
    around: true
  }, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    title: "It's a trash can"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.DeleteOutline, null)
  }));
};

exports.Accessibility = Accessibility;
Accessibility.parameters = {
  storyshots: {
    disable: true
  }
};

var Sizes = function Sizes() {
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    size: "xxsmall"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    size: "xsmall"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    size: "small"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    size: "medium"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null),
    size: "large"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_material.Delete, null)
  })));
};

exports.Sizes = Sizes;
Sizes.parameters = {
  storyshots: {
    disable: true
  }
};

var Artwork = function Artwork() {
  return _react["default"].createElement(_Layout.Space, {
    around: true
  }, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react["default"].createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
      fill: "hotpink"
    })),
    size: "xxsmall"
  }), _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement("svg", null, _react["default"].createElement("rect", {
      width: "100",
      height: "100",
      fill: "rgb(0,0,255)",
      strokeWidth: "3",
      stroke: "rgb(0,0,0)"
    }))
  }));
};

exports.Artwork = Artwork;
Artwork.parameters = {
  storyshots: {
    disable: true
  }
};

var IconsInsideComponents = function IconsInsideComponents() {
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Button.Button, {
    size: "large",
    iconAfter: _react["default"].createElement(_material.Refresh, null)
  }, "Add"), _react["default"].createElement(_Button.IconButton, {
    size: "large",
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Button.Button, {
    iconAfter: _react["default"].createElement(_material.Refresh, null)
  }, "Add"), _react["default"].createElement(_Button.IconButton, {
    size: "medium",
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Button.Button, {
    size: "small",
    iconAfter: _react["default"].createElement(_material.Refresh, null)
  }, "Add"), _react["default"].createElement(_Button.IconButton, {
    size: "small",
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Button.Button, {
    size: "xsmall",
    iconAfter: _react["default"].createElement(_material.Refresh, null)
  }, "Add"), _react["default"].createElement(_Button.IconButton, {
    size: "xsmall",
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Button.Button, {
    size: "xxsmall",
    iconAfter: _react["default"].createElement(_material.Refresh, null)
  }, "Add"), _react["default"].createElement(_Button.IconButton, {
    size: "xxsmall",
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter"
  })));
};

exports.IconsInsideComponents = IconsInsideComponents;
IconsInsideComponents.parameters = {
  storyshots: {
    disable: true
  }
};

var IconsPairedWithText = function IconsPairedWithText() {
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxsmall"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "xxxsmall",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xsmall"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "xxxsmall",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "small"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "xxsmall",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "medium"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "xxsmall",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "large"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "xsmall",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "small",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "small",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "medium",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "medium",
    icon: _react["default"].createElement(_material.Create, null)
  })), _react["default"].createElement(_Layout.Space, {
    gap: "u2"
  }, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxxxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_Icon.Icon, {
    size: "large",
    icon: _react["default"].createElement(_material.Create, null)
  })));
};

exports.IconsPairedWithText = IconsPairedWithText;
IconsPairedWithText.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Icon.stories.js.map