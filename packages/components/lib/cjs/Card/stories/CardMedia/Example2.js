"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = require("../../Card");

var _CardContent = require("../../CardContent");

var _CardMedia = require("../../CardMedia");

var _Layout = require("../../../Layout");

var _Text = require("../../../Text");

var _default = function _default() {
  return _react["default"].createElement(_Layout.Grid, {
    columns: 3
  }, _react["default"].createElement(_Card.Card, {
    raised: true
  }, _react["default"].createElement(_CardMedia.CardMedia, {
    image: "https://placeimg.com/640/480/nature",
    title: "Summer Nature"
  }), _react["default"].createElement(_CardContent.CardContent, null, _react["default"].createElement(_Text.Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Summer"), _react["default"].createElement(_Text.Heading, {
    as: "h4",
    fontSize: "medium",
    fontWeight: "semiBold",
    truncate: true
  }, "Life in The Great Outdoors"), _react["default"].createElement(_Text.Paragraph, {
    fontSize: "small"
  }, "10 reasons to get off the couch and head outside this summer."))), _react["default"].createElement(_Card.Card, {
    raised: true
  }, _react["default"].createElement(_CardMedia.CardMedia, {
    image: "https://placeimg.com/630/480/nature",
    title: "A Scenic Valley"
  }), _react["default"].createElement(_CardContent.CardContent, null, _react["default"].createElement(_Text.Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Explore"), _react["default"].createElement(_Text.Heading, {
    as: "h4",
    fontSize: "medium",
    fontWeight: "semiBold",
    truncate: true
  }, "Best Scenic Hikes"), _react["default"].createElement(_Text.Paragraph, {
    fontSize: "small"
  }, "Looking for a new place to trailblaze? Make sure it has a great view!"))), _react["default"].createElement(_Card.Card, {
    raised: true
  }, _react["default"].createElement(_CardMedia.CardMedia, {
    image: "https://placeimg.com/620/480/nature",
    title: "Relaxing Views"
  }), _react["default"].createElement(_CardContent.CardContent, null, _react["default"].createElement(_Text.Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Relax"), _react["default"].createElement(_Text.Heading, {
    as: "h4",
    fontSize: "large",
    fontWeight: "semiBold",
    truncate: true
  }, "Mindfull Wilderness"), _react["default"].createElement(_Text.Paragraph, {
    fontSize: "small"
  }, "Find a place to find your self."))));
};

exports["default"] = _default;
//# sourceMappingURL=Example2.js.map