import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig } from '@looker/visualizations-adapters';
import { XAxis } from './XAxis';
afterEach(() => {
  jest.resetAllMocks();
});
describe('XAxis', () => {
  const handleConfigChange = jest.fn();
  it('renders x-axis toggle when there are multiple config objects', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
          reversed: false
        }, {
          reversed: true
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('hidden when x-axis is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(XAxis, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('toggles XAxis reversed', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
          reversed: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Reverse'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        reversed: true
      }]
    }));
  });
  it('toggles XAxis gridlines', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
          gridlines: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Render Gridlines'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        gridlines: true
      }]
    }));
  });
  it('updates XAxis label value', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
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
      x_axis: [{
        label: 'New Label'
      }]
    }));
  });
  it('sets XAxis label to false when text input is empty', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
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
      x_axis: [{
        label: false
      }]
    }));
  });
  it('toggles XAxis values', () => {
    renderWithTheme(React.createElement(XAxis, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        x_axis: [{
          values: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Show Values'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        values: true
      }]
    }));
  });
});
//# sourceMappingURL=XAxis.spec.js.map