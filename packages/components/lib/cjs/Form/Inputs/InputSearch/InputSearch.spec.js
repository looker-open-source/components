"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _InputSearch = require("./InputSearch");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('InputSearch', function () {
  describe('Search icon', function () {
    test('shows by default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, null));
      expect(_react2.screen.getByTestId('search-icon')).toBeInTheDocument();
    });
    test('hidden with hideSearchIcon', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        hideSearchIcon: true
      }));
      expect(_react2.screen.queryByTitle('Search')).not.toBeInTheDocument();
    });
  });
  test('displays placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      placeholder: "Type your search"
    }));
    expect(_react2.screen.getByPlaceholderText('Type your search')).toBeVisible();
  });
  test('supports ref assignment', function () {
    var inputRef = (0, _react.createRef)();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      ref: inputRef,
      placeholder: "type here"
    }));
    expect(_react2.screen.getByPlaceholderText('type here')).toBe(inputRef.current);
  });
  test('accepts a value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      value: "start value"
    }));
    expect(_react2.screen.getByDisplayValue('start value')).toBeVisible();
  });
  test('accepts a defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      defaultValue: "replace me",
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    expect(input).toHaveValue('replace me');
  });
  test('calls onChange', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      onChange: onChangeMock,
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'New value'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith('New value');
  });
  test('displays summary', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
      value: "start value",
      summary: "summary value"
    }));
    expect(_react2.screen.getByText('summary value')).toBeVisible();
  });
  describe('Clear button', function () {
    test('clears value', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        placeholder: "type here",
        defaultValue: "start value"
      }));

      var button = _react2.screen.getByRole('button');

      _react2.fireEvent.click(button);

      expect(_react2.screen.getByPlaceholderText('type here')).toHaveDisplayValue('');
      expect(_react2.screen.queryByRole('button')).not.toBeInTheDocument();

      var input = _react2.screen.getByRole('textbox');

      expect(input).toHaveFocus();
    });
    test('calls onChange', function () {
      var onChange = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        value: "Search",
        onChange: onChange
      }));

      var inputButton = _react2.screen.getByRole('button');

      inputButton && _react2.fireEvent.click(inputButton);
      expect(onChange).toHaveBeenCalledWith('');
    });
    test('clear button and summary together', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        value: "start value",
        summary: "summary value"
      }));
      expect(_react2.screen.getByRole('button')).toBeVisible();
      expect(_react2.screen.getByText('summary value')).toBeVisible();
    });
    test('hidden when isClearable is false', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        value: "start value",
        summary: "summary value",
        isClearable: false
      }));
      expect(_react2.screen.queryByRole('button')).not.toBeInTheDocument();
    });
    test('hidden when value is empty', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, null));
      expect(_react2.screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });
  describe('options', function () {
    var options = [{
      value: 'FOO'
    }, {
      value: 'BAR'
    }, {
      label: 'Empty',
      value: ''
    }];
    test('list opens on change, not click', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        options: options,
        placeholder: "type here"
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.click(input);

      expect(_react2.screen.queryByRole('option')).not.toBeInTheDocument();

      _react2.fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });

      expect(input).toHaveDisplayValue('F');
      expect(_react2.screen.queryAllByRole('option')).toHaveLength(3);

      _react2.fireEvent.click(document);
    });
    test('calls onSelectOption', function () {
      var onSelectOptionMock = jest.fn();
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        options: options,
        placeholder: "type here",
        onSelectOption: onSelectOptionMock,
        onChange: onChangeMock
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });

      _react2.fireEvent.click(_react2.screen.getByText('BAR'));

      expect(onSelectOptionMock).toHaveBeenCalledWith({
        value: 'BAR'
      });
      expect(onChangeMock).toHaveBeenNthCalledWith(1, 'F');
      expect(onChangeMock).toHaveBeenNthCalledWith(2, 'BAR');

      _react2.fireEvent.click(document);
    });
    test('changeOnSelect={false}', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        options: options,
        placeholder: "type here",
        changeOnSelect: false,
        onChange: onChangeMock
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });

      _react2.fireEvent.click(_react2.screen.getByText('BAR'));

      expect(onChangeMock).toHaveBeenNthCalledWith(1, 'F');
      expect(onChangeMock).toHaveBeenNthCalledWith(2, '');

      _react2.fireEvent.click(document);
    });
    test('clearOnClose', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputSearch.InputSearch, {
        options: options,
        placeholder: "type here",
        clearOnClose: false,
        onChange: onChangeMock
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });

      _react2.fireEvent.click(document);

      expect(onChangeMock).toHaveBeenCalledWith('F');
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });
});
//# sourceMappingURL=InputSearch.spec.js.map