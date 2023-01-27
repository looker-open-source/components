
import React from 'react';
import { ComponentsProvider } from '@looker/components';
import { renderHook } from '@testing-library/react-hooks';
import { useStringFilterOptions } from './get_string_filter_options';
describe('string filter options', () => {
  it('should only return string literal matches and user attribute match options for parameter filters', () => {
    const {
      result: {
        current
      }
    } = renderHook(() => useStringFilterOptions(true), {
      wrapper: ({
        children
      }) => React.createElement(ComponentsProvider, null, children)
    });
    expect(current).toStrictEqual([{
      value: 'match',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_string_filter_options.spec.js.map