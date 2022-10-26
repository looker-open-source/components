"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _utils = require("../Combobox/utils");

var _InputChips = require("./InputChips");

describe('InputChips', function () {
  test('values are added on Enter keydown', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1'
      }
    });

    expect(onChangeMock).not.toHaveBeenCalled();

    _react2.fireEvent.keyDown(input, {
      key: 'Enter'
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('values are added when a comma is last character entered', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('values are not added when a comma is escaped', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1\\,'
      }
    });

    expect(onChangeMock).not.toHaveBeenCalled();
    expect(input).toHaveValue('tag1\\,');
  });
  test('values are added when pasting', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    (0, _componentsTestUtils.firePasteEvent)(input, "tag1\ntag2");

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1  tag2'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
    onChangeMock.mockClear();
    (0, _componentsTestUtils.firePasteEvent)(input, "tag1,tag2");

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1, tag2'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
  });
  test('values are added on blur', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag1'
      }
    });

    expect(onChangeMock).not.toHaveBeenCalled();

    _react2.fireEvent.blur(input);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('new values are appended to existing values', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag2,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
    expect(input).toHaveValue('');
  });
  test('values are removed on backspace keydown', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 't'
      }
    });

    _react2.fireEvent.keyDown(input, {
      key: 'Backspace'
    });

    expect(onChangeMock).not.toHaveBeenCalled();

    _react2.fireEvent.change(input, {
      target: {
        value: ''
      }
    });

    _react2.fireEvent.keyDown(input, {
      key: 'Backspace'
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('all values are removed by clicking clear field', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: ['tag1', 'tag2']
    }));

    var clear = _react2.screen.getByText('Clear Field');

    _react2.fireEvent.click(clear);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('values are removed by clicking remove on the chip', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: ['tag1']
    }));

    var remove = _react2.screen.getByText('Delete');

    _react2.fireEvent.click(remove);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('new values are validated', function () {
    var onChangeMock = jest.fn();
    var onValidationFailMock = jest.fn();
    var onDuplicateMock = jest.fn();
    var validate = jest.fn(function (value) {
      return value === 'tag1';
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here",
      validate: validate,
      onValidationFail: onValidationFailMock,
      onDuplicate: onDuplicateMock
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag2,'
      }
    });

    expect(onChangeMock).not.toHaveBeenCalled();
    expect(input).toHaveValue('tag2');
    expect(onValidationFailMock).toHaveBeenCalledWith(['tag2']);

    _react2.fireEvent.change(input, {
      target: {
        value: ' tag1,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  describe('formatInputValue', function () {
    test('false', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: [],
        placeholder: "type here",
        formatInputValue: false
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.change(input, {
        target: {
          value: '  no trim  ,'
        }
      });

      expect(onChangeMock).toHaveBeenCalledWith(['  no trim  ']);
      expect(input).toHaveValue('');
    });
    test('custom', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: [],
        placeholder: "type here",
        formatInputValue: function formatInputValue(value) {
          return value.toUpperCase();
        }
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.change(input, {
        target: {
          value: '  no trim  ,'
        }
      });

      expect(onChangeMock).toHaveBeenCalledWith(['  NO TRIM  ']);
      expect(input).toHaveValue('');
    });
  });
  test('duplicate values are not added', function () {
    var onChangeMock = jest.fn();
    var onDuplicateMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here",
      onDuplicate: onDuplicateMock
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: ' tag1,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledTimes(0);
    expect(onDuplicateMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('tag1');
  });
  test('escaped commas and tabs are preserved', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.change(input, {
      target: {
        value: 'tag\\,1,tag\\	2,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith(['tag,1', 'tag	2']);
  });
  describe('removeOnBackspace', function () {
    test('true by default', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.keyDown(input, {
        key: 'Backspace'
      });

      expect(onChangeMock).toHaveBeenCalledWith(['foo']);
    });
    test('false', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here",
        removeOnBackspace: false
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.keyDown(input, {
        key: 'Backspace'
      });

      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
  test('mousedown on a chip does not focus the inner input', function () {
    jest.useFakeTimers();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: function onChange() {
        return null;
      },
      values: ['foo', 'bar'],
      placeholder: "type here"
    }));

    var chip = _react2.screen.getByText('bar');

    var deleteButton = _react2.screen.getAllByText('Delete')[0];

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.mouseDown(chip);

    expect(input).not.toHaveFocus();

    _react2.fireEvent.click(deleteButton);

    expect(input).toHaveFocus();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('mousedown on clear button does not focus the inner input', function () {
    jest.useFakeTimers();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: function onChange() {
        return null;
      },
      values: ['foo', 'bar'],
      placeholder: "type here"
    }));

    var clear = _react2.screen.getByText('Clear Field');

    var input = _react2.screen.getByPlaceholderText('type here');

    _react2.fireEvent.mouseDown(clear);

    expect(input).not.toHaveFocus();

    _react2.fireEvent.click(clear);

    expect(input).toHaveFocus();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  describe('Selecting chips', function () {
    function hasSelectedValues(values) {
      var selectedChips = _react2.screen.getAllByRole('option', {
        selected: true
      });

      expect(selectedChips).toHaveLength(values.length);
      values.forEach(function (value, index) {
        expect(selectedChips[index]).toHaveTextContent(value);
      });
      expect(_react2.screen.getByTestId('hidden-input')).toHaveValue(values.join(','));
    }

    function hasNoSelectedValues() {
      expect(_react2.screen.queryByRole('option', {
        selected: true
      })).not.toBeInTheDocument();
    }

    test('arrow keys', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: function onChange() {
          return null;
        },
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.keyDown(input, {
        key: 'ArrowLeft'
      });

      expect(hiddenInput).toHaveFocus();
      hasSelectedValues(['bar']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft'
      });

      hasSelectedValues(['foo']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });

      hasSelectedValues(['bar']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });

      expect(input).toHaveFocus();
      hasNoSelectedValues();
    });
    test('arrow + shift keys', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: function onChange() {
          return null;
        },
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.keyDown(input, {
        key: 'ArrowLeft',
        shiftKey: true
      });

      hasSelectedValues(['bar']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft',
        shiftKey: true
      });

      hasSelectedValues(['foo', 'bar']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight',
        shiftKey: true
      });

      expect(input).toHaveFocus();
      hasNoSelectedValues();

      _react2.fireEvent.keyDown(input, {
        key: 'ArrowLeft'
      });

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft'
      });

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight',
        shiftKey: true
      });

      hasSelectedValues(['foo', 'bar']);
    });
    test('cmd/ctrl + a', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: function onChange() {
          return null;
        },
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var input = _react2.screen.getByPlaceholderText('type here');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.keyDown(input, {
        key: 'a'
      });

      hasNoSelectedValues();

      _react2.fireEvent.keyDown(hiddenInput, {
        ctrlKey: true,
        key: 'a'
      });

      hasSelectedValues(['foo', 'bar']);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });

      hasNoSelectedValues();

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'a',
        metaKey: true
      });

      hasSelectedValues(['foo', 'bar']);
    });
    test('clicking', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: function onChange() {
          return null;
        },
        values: ['foo', 'bar', 'baz'],
        placeholder: "type here"
      }));

      var foo = _react2.screen.getByText('foo');

      var baz = _react2.screen.getByText('baz');

      _react2.fireEvent.click(foo);

      hasSelectedValues(['foo']);

      _react2.fireEvent.click(baz);

      hasSelectedValues(['baz']);

      _react2.fireEvent.click(foo, {
        metaKey: true
      });

      hasSelectedValues(['foo', 'baz']);

      _react2.fireEvent.click(baz, {
        metaKey: true
      });

      hasSelectedValues(['foo']);

      var input = _react2.screen.getByPlaceholderText('type here');

      _react2.fireEvent.focus(input);

      hasNoSelectedValues();

      _react2.fireEvent.click(baz);

      hasSelectedValues(['baz']);

      _react2.fireEvent.click(foo, {
        ctrlKey: true
      });

      hasSelectedValues(['foo', 'baz']);

      _react2.fireEvent.click(baz, {
        ctrlKey: true
      });

      hasSelectedValues(['foo']);

      _react2.fireEvent.focus(input);

      hasNoSelectedValues();

      _react2.fireEvent.click(baz);

      _react2.fireEvent.click(foo, {
        shiftKey: true
      });

      hasSelectedValues(['foo', 'bar', 'baz']);
    });
  });
  describe('copying / removing selected chips', function () {
    test('delete & backspace keys', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var foo = _react2.screen.getByText('foo');

      var bar = _react2.screen.getByText('bar');

      var input = _react2.screen.getByPlaceholderText('type here');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.click(foo);

      expect(hiddenInput).toHaveFocus();

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'Delete'
      });

      expect(onChangeMock).toHaveBeenCalledWith(['bar']);
      expect(input).toHaveFocus();

      _react2.fireEvent.click(bar);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'Backspace'
      });

      expect(onChangeMock).toHaveBeenCalledWith(['foo']);
    });
    test('copy', function () {
      document.execCommand = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: function onChange() {
          return null;
        },
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var foo = _react2.screen.getByText('foo');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.click(foo);

      _react2.fireEvent.keyDown(hiddenInput, {
        key: 'c',
        metaKey: true
      });

      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });
    test('cut', function () {
      document.execCommand = jest.fn();
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));

      var foo = _react2.screen.getByText('foo');

      var hiddenInput = _react2.screen.getByTestId('hidden-input');

      _react2.fireEvent.click(foo);

      _react2.fireEvent.keyDown(hiddenInput, {
        ctrlKey: true,
        key: 'x'
      });

      expect(document.execCommand).toHaveBeenCalledWith('copy');
      expect(onChangeMock).toHaveBeenCalledWith(['bar']);
    });
  });
  test('formatChip', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputChips.InputChips, {
      onChange: function onChange() {
        return null;
      },
      values: ['Foo Bar<foo.bar@example.com>', 'Baz Qux<baz.qux@example.com>', 'example@example.com'],
      formatChip: function formatChip(value) {
        var option = (0, _utils.parseOption)(value);
        return option.label || option.value;
      }
    }));

    var chips = _react2.screen.getAllByRole('option');

    expect(chips[0]).toHaveTextContent('Foo Bar');
    expect(chips[1]).toHaveTextContent('Baz Qux');
    expect(chips[2]).toHaveTextContent('example@example.com');
  });
});
//# sourceMappingURL=InputChips.spec.js.map