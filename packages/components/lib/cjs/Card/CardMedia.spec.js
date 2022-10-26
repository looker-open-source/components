"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _CardMedia = require("./CardMedia");

describe('CardMedia', function () {
  test('default', function () {
    var imgUrl = 'http://faux.com/faux-image.jpg';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CardMedia.CardMedia, {
      "data-testid": "card-media",
      image: imgUrl
    }));
    expect(_react2.screen.getByTestId('card-media')).toBeInTheDocument();
    expect(_react2.screen.getByTestId('card-media')).toHaveStyle("background-image: url('".concat(imgUrl, "')"));
  });
  test('color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CardMedia.CardMedia, {
      "data-testid": "card-media",
      backgroundColor: "key"
    }));
    expect(_react2.screen.getByTestId('card-media')).toBeInTheDocument();
    expect(_react2.screen.getByTestId('card-media')).toHaveStyle('background-color: rgb(108, 67, 224);');
  });
});
//# sourceMappingURL=CardMedia.spec.js.map