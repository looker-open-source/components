"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _materialOutlined = require("@styled-icons/material-outlined");

var _List = require("../List");

var _ListItem = require("./ListItem");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('ListItem', function () {
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, null, "List Item"));

    var listItem = _react2.screen.getByText('List Item').closest('button');

    expect(listItem).not.toHaveClass('bg-on fg-in');
    expect(listItem).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    listItem && _react2.fireEvent.focus(listItem);
    expect(listItem).toHaveClass('bg-on');
    listItem && _react2.fireEvent.mouseDown(listItem);
    expect(listItem).toHaveClass('bg-on fg-in');
    listItem && _react2.fireEvent.mouseUp(listItem);
    runTimers();
    expect(listItem).toHaveClass('bg-on fg-out');
    runTimers();
    expect(listItem).toHaveClass('bg-on');
    listItem && _react2.fireEvent.blur(listItem);
    expect(listItem).not.toHaveClass('bg-on fg-in');

    _react2.fireEvent.click(document);
  });
  test('children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, null, "who!"));
    expect(_react2.screen.getByText('who!')).toBeVisible();
  });
  test('description', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      description: "are you?"
    }, "who!"));
    expect(_react2.screen.getByText('are you?')).toBeVisible();
    expect(_react2.screen.getByRole('listitem')).not.toHaveAttribute('description');
  });
  test('detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: "Is an excellent question"
    }, "who!"));
    expect(_react2.screen.getByText('Is an excellent question')).toBeVisible();
    expect(_react2.screen.getByRole('listitem')).not.toHaveAttribute('detail');
  });
  test('iconGutter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_List.List, {
      iconGutter: true
    }, _react["default"].createElement(_ListItem.ListItem, null, "who!")));
    expect(_react2.screen.getByText('who!')).toBeVisible();
  });
  describe('color', function () {
    test('theme.colors.key', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
        selected: true,
        color: "key"
      }, "who!"));
      expect(_react2.screen.getByText('who!')).toHaveStyle('color: #262d33');
      expect(_react2.screen.getByRole('listitem')).toHaveStyle('background: #f3f2ff');
    });
    test('theme', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
        color: "calculation",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }, "who!"));
      expect(_react2.screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(_react2.screen.getByTestId('icon').parentNode).toHaveStyle('color: #319220');
    });
    test('theme selected', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
        selected: true,
        color: "calculation"
      }, "who!"));
      expect(_react2.screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(_react2.screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8');
    });
    test('theme + selected + hover', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
        hovered: true,
        selected: true,
        color: "calculation"
      }, "who!"));
      expect(_react2.screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(_react2.screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8');
    });
    test('custom', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
        color: "#cc0000",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }, "who!"));
      expect(_react2.screen.getByText('who!')).toHaveStyle('color: #cc0000');
      expect(_react2.screen.getByTestId('icon').parentNode).toHaveStyle('color: #cc0000');
    });
  });
  test('truncate', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      truncate: true
    }, "Some long text to truncate in my list item label"));
    expect(_react2.screen.getByText('Some long text to truncate in my list item label')).toBeVisible();
  });
  test('renders icon', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      icon: _react["default"].createElement(_materialOutlined.Science, null)
    }, "Icon"));
    expect(_react2.screen.getByText('Icon')).toBeInTheDocument();
  });
  test('renders artwork', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      icon: _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("title", null, "SVG Title Here"))
    }, "Artwork"));
    expect(_react2.screen.getByTitle('SVG Title Here')).toBeInTheDocument();
  });
  test.skip('has a key color border on key press', function () {
    (0, _react2.configure)({
      computedStyleSupportsPseudoElements: true
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, null, "Item"));

    var item = _react2.screen.getByRole('listitem');

    _react2.fireEvent.keyUp(item, {
      key: 'Enter'
    });

    expect(window.getComputedStyle(item, ':after')).toHaveAttribute('border', 'solid 2px #9785F2');
  });
  test('is not clickable when disabled', function () {
    var callbackFn = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "button",
      disabled: true,
      onClick: callbackFn
    }, "Item"));

    var item = _react2.screen.getByText('Item');

    expect(item.closest('button')).toHaveAttribute('type', 'button');

    _react2.fireEvent.click(item);

    expect(callbackFn).toHaveBeenCalledTimes(0);
  });
  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "link",
      href: "https://google.com",
      target: "_blank"
    }, "Link"));

    var item = _react2.screen.getByRole('listitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'noopener noreferrer');
  });
  test('auto appends "noopener noreferrer" to rel prop value when itemRole="link", target="_blank" and rel is not undefined', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "link",
      href: "https://google.com",
      rel: "nogouda",
      target: "_blank"
    }, "Link"));

    var item = _react2.screen.getByRole('listitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer');
  });
  test('does not auto append "noopener noreferrer" to link without target="_blank"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "link",
      rel: "nogouda",
      href: "https://google.com"
    }, "Link"));

    var item = _react2.screen.getByRole('listitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda');
  });
  test('renders label container as <div> when itemRole="none"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "none"
    }, "No Role"));
    expect(_react2.screen.getByRole('listitem').nodeName).toBe('DIV');
  });
  test('does not trigger onClick on detail click when accessory === true', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      },
      onClick: onClick
    }, "Dimension"));

    _react2.fireEvent.click(_react2.screen.getByText('Dimension'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Detail'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('triggers onClick on detail click when accessory === false', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: false
        }
      },
      onClick: onClick
    }, "Dimension"));

    _react2.fireEvent.click(_react2.screen.getByText('Dimension'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Detail'));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
  test('hides and shows detail when detailHoverDisclosure === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: {
        content: 'Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Label"));
    expect(_react2.screen.queryByText('Detail')).not.toBeInTheDocument();

    _react2.fireEvent.mouseEnter(_react2.screen.getByText('Label'), {
      bubbles: true
    });

    expect(_react2.screen.getByText('Detail')).toBeInTheDocument();
  });
  test('onKeyUp callback functions', function () {
    var onKeyUp = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      onKeyUp: onKeyUp
    }, "Label"));

    _react2.fireEvent.keyUp(_react2.screen.getByText('Label'), {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });

    expect(onKeyUp).toHaveBeenCalled();
  });
  test('warns on disabled link', function () {
    var globalConsole = global.console;
    var warnMock = jest.fn();
    global.console = {
      warn: warnMock
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      itemRole: "link",
      disabled: true
    }, "Disabled but not"));
    expect(warnMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"itemRole=\\\"link\\\" and disabled cannot be combined - use itemRole=\\\"button\\\" if you need to offer a disabled ListItem\",\n        ],\n      ]\n    ");
    global.console = globalConsole;
  });
  test('properly passes aria related props to label container', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      "aria-current": "location",
      "aria-describedby": "something-else"
    }, "ListItem with aria props"));

    var label = _react2.screen.getByRole('listitem');

    expect(label).toHaveAttribute('aria-current', 'location');
    expect(label).toHaveAttribute('aria-describedby', 'something-else');

    var wrapper = _react2.screen.getByRole('none');

    expect(wrapper).not.toHaveAttribute('aria-current', 'location');
    expect(wrapper).not.toHaveAttribute('aria-describedby', 'something-else');
  });
  test('has left padding on detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: "Detail"
    }, "Dimension"));
    expect(_react2.screen.getByText('Detail')).toHaveStyleRule('padding-left', '0.75rem');
  });
  test('no left padding on detail when accessory === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ListItem.ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      }
    }, "Dimension"));
    expect(_react2.screen.getByText('Detail')).toHaveStyleRule('padding-left', '0');
  });
});
//# sourceMappingURL=ListItem.spec.js.map