"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Pagination = require("./Pagination");

describe('Pagination', function () {
  test('No pagination when there are 1 or less pages', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Pagination.Pagination, {
      current: 5,
      pages: 1,
      onChange: jest.fn()
    }), _react["default"].createElement(_Pagination.Pagination, {
      current: 5,
      pages: 0,
      onChange: jest.fn()
    })));
    expect(_react2.screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('alwaysVisible', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 5,
      pages: 1,
      onChange: jest.fn(),
      alwaysVisible: true
    }));
    expect(_react2.screen.getAllByRole('button').length).toEqual(4);
  });
  test('All pagination buttons enabled when current > 1 and current < pages', function () {
    var onPageChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 5,
      pages: 10,
      onChange: onPageChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('First page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Previous page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);

    _react2.fireEvent.click(_react2.screen.getByText('Next page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(3);

    _react2.fireEvent.click(_react2.screen.getByText('Last page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('First page and previous page buttons are disabled when current === 1', function () {
    var onPageChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 1,
      pages: 10,
      onChange: onPageChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('First page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(0);

    _react2.fireEvent.click(_react2.screen.getByText('Previous page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(0);

    _react2.fireEvent.click(_react2.screen.getByText('Next page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Last page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);
  });
  test('First page and previous page buttons are enabled when current === 2', function () {
    var onPageChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 2,
      pages: 10,
      onChange: onPageChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('First page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Previous page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);

    _react2.fireEvent.click(_react2.screen.getByText('Next page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(3);

    _react2.fireEvent.click(_react2.screen.getByText('Last page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('Last page and next page buttons are enabled when current === (pages - 1)', function () {
    var onPageChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 9,
      pages: 10,
      onChange: onPageChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('First page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Previous page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);

    _react2.fireEvent.click(_react2.screen.getByText('Next page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(3);

    _react2.fireEvent.click(_react2.screen.getByText('Last page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('Last page and next page buttons are disabled when current === pages', function () {
    var onPageChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Pagination.Pagination, {
      current: 10,
      pages: 10,
      onChange: onPageChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('First page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Previous page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);

    _react2.fireEvent.click(_react2.screen.getByText('Next page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);

    _react2.fireEvent.click(_react2.screen.getByText('Last page of results'));

    expect(onPageChange).toHaveBeenCalledTimes(2);
  });
});
//# sourceMappingURL=Pagination.spec.js.map