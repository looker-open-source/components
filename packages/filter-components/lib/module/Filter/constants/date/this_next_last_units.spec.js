

import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ComponentsProvider } from '@looker/components';
import { useFiscalThisNextUnits, useFiscalLastUnits, useThisNextUnits, useLastUnits } from './this_next_last_units';
const testSingular = option => expect(option.label).toBe(option.singular);
describe('date unit options for ThisNextLast component', () => {
  const hooksToTest = {
    useLastUnits,
    useThisNextUnits,
    useFiscalThisNextUnits,
    useFiscalLastUnits
  };
  const wrapper = ({
    children
  }) => React.createElement(ComponentsProvider, null, children);
  Object.keys(hooksToTest).forEach(key => {
    it(`${key} matches expected values`, () => {
      const {
        result: {
          current
        }
      } = renderHook(hooksToTest[key], {
        wrapper
      });
      expect(current).toMatchSnapshot();
      current.forEach(testSingular);
    });
  });
  it('this and next component options should not contain day, hour, minute, second', () => {
    const notContains = ['day', 'hour', 'minute', 'second'];
    const {
      result: {
        current: thisNextUnits
      }
    } = renderHook(useThisNextUnits, {
      wrapper
    });
    const {
      result: {
        current: fiscalThisNextUnits
      }
    } = renderHook(useFiscalThisNextUnits, {
      wrapper
    });
    expect(thisNextUnits).not.toContain(notContains);
    expect(fiscalThisNextUnits).not.toContain(notContains);
  });
});
//# sourceMappingURL=this_next_last_units.spec.js.map