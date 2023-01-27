import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig } from '@looker/visualizations-adapters';
import { YAxis } from './YAxis';
afterEach(() => {
  jest.resetAllMocks();
});
describe('YAxis', () => {
  const handleConfigChange = jest.fn();
  it('renders y-axis toggle when there are multiple config objects', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          range: [0, 100]
        }, {
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('hidden when Y-Axis is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(YAxis, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('toggles YAxis gridlines', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          gridlines: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Render Gridlines'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        gridlines: true
      }]
    }));
  });
  it('updates YAxis label value', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          label: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByLabelText('Label'), {
      target: {
        value: 'New Label'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        label: 'New Label'
      }]
    }));
  });
  it('sets YAxis label to false when text input is empty', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          label: 'Default Label'
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByLabelText('Label'), {
      target: {
        value: ''
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        label: false
      }]
    }));
  });
  it('toggles YAxis values', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          values: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Show Values'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        values: true
      }]
    }));
  });
  it('updates range: min', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByLabelText('Y-min'), {
      target: {
        value: 20
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        range: [20, 'auto']
      }]
    }));
  });
  it('updates range: max', () => {
    renderWithTheme(React.createElement(YAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        y_axis: [{
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.change(screen.getByLabelText('Y-max'), {
      target: {
        value: 50
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        range: ['auto', 50]
      }]
    }));
  });
});
//# sourceMappingURL=YAxis.spec.js.map