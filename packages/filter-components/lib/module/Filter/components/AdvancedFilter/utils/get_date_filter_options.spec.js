
import React from 'react';
import { ComponentsProvider } from '@looker/components';
import { renderHook } from '@testing-library/react-hooks';
import { useDateFilterOptions } from './get_date_filter_options';
describe('date filter options', () => {
  it('should only return direct date matches and user attribute match options for parameter filters', () => {
    const {
      result: {
        current
      }
    } = renderHook(() => useDateFilterOptions(true), {
      wrapper: ({
        children
      }) => React.createElement(ComponentsProvider, null, children)
    });
    expect(current).toStrictEqual([{
      value: 'on',
      label: 'is on the day'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_date_filter_options.spec.js.map