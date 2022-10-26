import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockBarConfig, mockLineConfig } from '@looker/visualizations-adapters';
import { Positioning } from './Positioning';
afterEach(() => {
  jest.resetAllMocks();
});
describe('Positioning', () => {
  const handleConfigChange = jest.fn();
  it('hidden when positioning is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(Positioning, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('area positioning: overlay', () => {
    renderWithTheme(React.createElement(Positioning, {
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        type: 'area',
        positioning: 'percent'
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Positioning'));
    fireEvent.click(screen.getByText('overlay'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'area',
      positioning: 'overlay'
    }));
  });
  it('bar positioning: grouped', () => {
    renderWithTheme(React.createElement(Positioning, {
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        positioning: 'percent'
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Positioning'));
    fireEvent.click(screen.getByText('grouped'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'bar',
      positioning: 'grouped'
    }));
  });
});
//# sourceMappingURL=Positioning.spec.js.map