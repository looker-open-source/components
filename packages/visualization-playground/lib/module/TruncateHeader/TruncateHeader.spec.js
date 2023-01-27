import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { TruncateHeader } from './TruncateHeader';
afterEach(() => {
  jest.resetAllMocks();
});
describe('TruncateHeader', () => {
  const handleConfigChange = jest.fn();
  it('hidden when truncate_header is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(TruncateHeader, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('toggles truncate_header', () => {
    renderWithTheme(React.createElement(TruncateHeader, {
      config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
        truncate_header: true
      }),
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Truncate header'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      truncate_header: false
    }));
  });
});
//# sourceMappingURL=TruncateHeader.spec.js.map