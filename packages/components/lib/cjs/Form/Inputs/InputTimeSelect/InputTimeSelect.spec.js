"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _map = _interopRequireDefault(require("lodash/map"));

var _InputTimeSelect = require("./InputTimeSelect");

jest.mock('lodash/throttle', function () {
  return function (fn) {
    return fn;
  };
});
var realDateNow = Date.now.bind(global.Date);
var realScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
beforeEach(function () {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  global.Date.now = jest.fn(function () {
    return 1580567580000;
  });
});
afterEach(function () {
  global.Date.now = realDateNow;
  window.HTMLElement.prototype.scrollIntoView = realScrollIntoView;
  jest.resetAllMocks();
});

var extractTextFromDomList = function extractTextFromDomList(list) {
  var options = list.getElementsByTagName('li');
  return (0, _map["default"])(options, function (el) {
    return el.textContent;
  });
};

var renderListContent = function renderListContent(props) {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputTimeSelect.InputTimeSelect, props));

  var inputBox = _react2.screen.getByPlaceholderText('Select time');

  _react2.fireEvent.click(inputBox);

  var domList = _react2.screen.getByRole('listbox');

  return domList;
};

describe('prop: format', function () {
  test('formats options in 12 hour time', function () {
    var view = renderListContent({
      format: '12h'
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('formats options in 24 hour time', function () {
    var view = renderListContent({
      format: '24h'
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
});
describe('prop: interval', function () {
  test('renders 5-minute intervals', function () {
    var view = renderListContent({
      interval: 5
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('renders 10-minute intervals', function () {
    var view = renderListContent({
      interval: 10
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('renders 15-minute intervals', function () {
    var view = renderListContent({
      interval: 15
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('renders 20-minute intervals', function () {
    var view = renderListContent({
      interval: 20
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('renders 30-minute intervals', function () {
    var view = renderListContent({
      interval: 30
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
  test('renders 60-minute intervals', function () {
    var view = renderListContent({
      interval: 60
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();

    _react2.fireEvent.click(document);
  });
});
describe('text input', function () {
  test('converts shorthand input to 24h formatted string on change', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputTimeSelect.InputTimeSelect, {
      onChange: handleChange
    }));
    expect(handleChange).not.toHaveBeenCalled();

    var inputBox = _react2.screen.getByPlaceholderText('Select time');

    _react2.fireEvent.click(inputBox);

    _react2.fireEvent.change(inputBox, {
      target: {
        value: '2pm'
      }
    });

    _react2.fireEvent.keyDown(inputBox, {
      key: 'Enter'
    });

    expect(handleChange).toHaveBeenLastCalledWith('14:00');

    _react2.fireEvent.change(inputBox, {
      target: {
        value: '3:3'
      }
    });

    _react2.fireEvent.keyDown(inputBox, {
      key: 'Tab'
    });

    expect(handleChange).toHaveBeenLastCalledWith('03:03');

    _react2.fireEvent.click(document);
  });
});
describe('keyboard nav ux', function () {
  test('highlights closest time to now when an unselected list is opened', function () {
    var view = renderListContent({});
    var selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot("\"06:30 am\"");

    _react2.fireEvent.click(document);
  });
  test('highlights selected value when list is opened', function () {
    var view = renderListContent({
      onChange: jest.fn(),
      value: '14:15'
    });
    var selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot("\"02:15 pm\"");

    _react2.fireEvent.click(document);
  });
  test('highlights closest time to selected value when list is opened but value does not match provided options', function () {
    var view = renderListContent({
      onChange: jest.fn(),
      value: '16:38'
    });
    var selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot("\"04:45 pm\"");

    _react2.fireEvent.click(document);
  });
});
//# sourceMappingURL=InputTimeSelect.spec.js.map