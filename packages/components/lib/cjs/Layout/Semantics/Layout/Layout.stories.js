"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WhitespaceRepro = exports.ScrollSelectedAreas = exports.ScrollIndependently = exports.ScrollAllAreasTogetherDefault = exports.FixedWithFooterAndHeaderShadow = exports.Basic = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _material = require("@styled-icons/material");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _storybook = require("@looker/storybook");

var _Constitution = require("../../../fixtures/Constitution");

var _ListHelper = require("../../../fixtures/ListHelper");

var _Button = require("../../../Button");

var _Text = require("../../../Text");

var _ = require("../");

var _templateObject, _templateObject2;

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Layout,
  title: 'Layout'
};
exports["default"] = _default;
var AsideAlt = (0, _styledComponents["default"])(_.Aside).withConfig({
  displayName: "Layoutstories__AsideAlt",
  componentId: "sc-563f1e-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));

var Highlighter = _styledComponents["default"].div.withConfig({
  displayName: "Layoutstories__Highlighter",
  componentId: "sc-563f1e-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  /* stylelint-disable color-named */\n\n  ", ", ", " {\n    background-color: lightcoral;\n  }\n\n  ", " {\n    background-color: lightsalmon;\n  }\n\n  ", " {\n    background-color: lightskyblue;\n  }\n\n  ", " {\n    background-color: lightgoldenrodyellow;\n  }\n"])), _.Header, _.Footer, _.Aside, AsideAlt, _.Section);

var Basic = function Basic() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, null, _react["default"].createElement(_.Header, {
    height: "4rem",
    px: "large"
  }, "I'm the header"), _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px"
  }, _react["default"].createElement(_ListHelper.ItemsFiller, {
    count: 20
  })), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null))), _react["default"].createElement(_.Footer, {
    height: "3rem",
    px: "large"
  }, "I'm a footer")));
};

exports.Basic = Basic;

var FixedWithFooterAndHeaderShadow = function FixedWithFooterAndHeaderShadow() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Header, {
    height: "4rem",
    px: "large"
  }, "I'm the header"), _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px"
  }, _react["default"].createElement(_ListHelper.ItemsFiller, {
    count: 20
  })), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null))), _react["default"].createElement(_.Footer, {
    height: "3rem",
    px: "large"
  }, "I'm a footer")));
};

exports.FixedWithFooterAndHeaderShadow = FixedWithFooterAndHeaderShadow;

var ScrollIndependently = function ScrollIndependently() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5"
  }, _react["default"].createElement(_Constitution.Constitution, null)), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null)), _react["default"].createElement(AsideAlt, {
    p: "u10",
    width: "navigation"
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null)))));
};

exports.ScrollIndependently = ScrollIndependently;
ScrollIndependently.parameters = {
  storyshots: {
    disable: true
  }
};

var ScrollSelectedAreas = function ScrollSelectedAreas() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px"
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null)), _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Section, {
    main: true,
    scrollWithin: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null)), _react["default"].createElement(AsideAlt, {
    scrollWithin: true,
    p: "u10"
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null))))));
};

exports.ScrollSelectedAreas = ScrollSelectedAreas;
ScrollSelectedAreas.parameters = {
  storyshots: {
    disable: true
  }
};

var ScrollAllAreasTogetherDefault = function ScrollAllAreasTogetherDefault() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, null, _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px"
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null)), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null)), _react["default"].createElement(AsideAlt, {
    p: "u10",
    width: "10rem"
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null)))));
};

exports.ScrollAllAreasTogetherDefault = ScrollAllAreasTogetherDefault;
ScrollAllAreasTogetherDefault.parameters = {
  storyshots: {
    disable: true
  }
};

var WhitespaceRepro = function WhitespaceRepro() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Header, {
    height: "4rem",
    px: "large"
  }, "I'm the header"), _react["default"].createElement(_.Layout, {
    hasAside: true
  }, _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px"
  }, _react["default"].createElement(_ListHelper.ItemsFiller, {
    count: 20
  })), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10"
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_Constitution.Constitution, null), _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.Info, null),
    label: "Info"
  })))));
};

exports.WhitespaceRepro = WhitespaceRepro;
WhitespaceRepro.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Layout.stories.js.map