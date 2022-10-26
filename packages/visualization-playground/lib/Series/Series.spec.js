import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig, mockFields } from '@looker/visualizations-adapters';
import { Series } from './Series';
afterEach(() => {
  jest.resetAllMocks();
});
describe('Series', () => {
  const handleConfigChange = jest.fn();
  it('hidden when Series is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(Series, {
      fields: mockFields,
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('renders a Series editor block for every element in the series', () => {
    var _mockLineConfig$serie;

    renderWithTheme(React.createElement(Series, {
      fields: mockFields,
      config: {
        type: mockLineConfig.type,
        series: mockLineConfig.series
      },
      onConfigChange: handleConfigChange
    }));
    expect(screen.getAllByRole('group')).toHaveLength(Array.isArray(mockLineConfig.series) && (mockLineConfig === null || mockLineConfig === void 0 ? void 0 : (_mockLineConfig$serie = mockLineConfig.series) === null || _mockLineConfig$serie === void 0 ? void 0 : _mockLineConfig$serie.length) || 0);
  });
  it('updates Series Color', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            color: '#ffffff'
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByDisplayValue('#ffffff'), {
      target: {
        value: '#000000'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          color: '#000000'
        }
      }
    }));
    const {
      calls
    } = handleConfigChange.mock;
    const draftConfig = calls[calls.length - 1][0];
    expect(draftConfig.series['orders.count'].color).toBe('#000000');
    fireEvent.click(document);
  });
  it('updates Series Label', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            label: 'Order Count'
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByDisplayValue('Order Count'), {
      target: {
        value: '0RD3R C0UN7'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          label: '0RD3R C0UN7'
        }
      }
    }));
  });
  it('updates Series Line Width', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            line_width: 5
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByDisplayValue('5'), {
      target: {
        value: 15
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          line_width: 15
        }
      }
    }));
  });
  it('updates Series Point Shape', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            shape: 'circle'
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Point Shape'));
    fireEvent.click(screen.getByText('square'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          shape: 'square'
        }
      }
    }));
  });
  it('updates Series Point Style', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            style: 'none'
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Point Style'));
    fireEvent.click(screen.getByText('outline'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          style: 'outline'
        }
      }
    }));
  });
  it('updates Series Visibility', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            visible: false
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Visible'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          visible: true
        }
      }
    }));
  });
  it('updates Series Size By', () => {
    renderWithTheme(React.createElement(Series, {
      config: {
        type: 'scatter',
        series: {
          'orders.count': {
            size_by: 'none'
          }
        }
      },
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Size By'));
    fireEvent.click(screen.getAllByRole('option')[1]);
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          size_by: mockFields.measures[0].name
        }
      }
    }));
  });
  it('updates Series Value Format', () => {
    renderWithTheme(React.createElement(Series, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series: {
          'orders.count': {
            value_format: '#,##0.00'
          }
        }
      }),
      fields: mockFields,
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByLabelText('Value Format'), {
      target: {
        value: '0'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          value_format: '0'
        }
      }
    }));
  });
});
//# sourceMappingURL=Series.spec.js.map