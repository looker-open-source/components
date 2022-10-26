"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Rich = exports.Critical = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _Icon = require("../../Icon");

var _Layout = require("../../Layout");

var _Link = require("../../Link");

var _Text = require("../../Text");

var _Confirm = require("./Confirm");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Confirm.Confirm,
  title: 'Confirm'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_Confirm.Confirm, {
    title: "Confirm Something",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    onConfirm: function onConfirm(close) {
      alert('You did something');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, function (open) {
    return _react["default"].createElement(_Button.ButtonOutline, {
      onClick: open
    }, "Do something");
  });
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var Critical = function Critical() {
  return _react["default"].createElement(_Confirm.Confirm, {
    title: "Confirm Something",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    onConfirm: function onConfirm(close) {
      alert('You did something');
      close();
    },
    buttonColor: "critical",
    width: ['10rem', '20rem', '30rem', '40rem']
  }, function (open) {
    return _react["default"].createElement(_Button.ButtonOutline, {
      color: "critical",
      onClick: open
    }, "Something Destructive");
  });
};

exports.Critical = Critical;
Critical.parameters = {
  storyshots: {
    disable: true
  }
};

var Rich = function Rich() {
  var message = _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    size: "80px"
  }), _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Paragraph, null, "Canadians say \"sorry\" so often that", ' ', _react["default"].createElement("strong", null, "in 2009 a law was passed"), " declaring that an apology cannot be used as an admission of guilt."), _react["default"].createElement("cite", null, "SOURCE:", ' ', _react["default"].createElement(_Link.Link, {
    href: "https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/",
    target: "_blank"
  }, "the loop"))));

  return _react["default"].createElement(_Confirm.Confirm, {
    title: "Did you know?",
    message: message,
    onConfirm: function onConfirm(close) {
      alert('Now you know.');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, function (open) {
    return _react["default"].createElement(_Button.Button, {
      onClick: open
    }, "Do something fancy");
  });
};

exports.Rich = Rich;
Rich.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Confirm.stories.js.map