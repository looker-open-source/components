
import React from 'react';
import { ComponentsProvider } from '@looker/components';
import { renderHook } from '@testing-library/react-hooks';
import { ERROR_TYPE } from '../../constants';
import { useValidationMessage } from '.';
describe('useValidationMessage', () => {
  const wrapper = ({
    children
  }) => React.createElement(ComponentsProvider, null, children);
  describe('Required filter', () => {
    it('should error if required filter is on and there is no value', () => {
      const {
        result: {
          current
        }
      } = renderHook(() => useValidationMessage('', true), {
        wrapper
      });
      expect(current).toEqual({
        type: ERROR_TYPE,
        message: 'Value required'
      });
    });
    it('should not error if required filter is off and there is no value', () => {
      const {
        result: {
          current
        }
      } = renderHook(() => useValidationMessage('', false), {
        wrapper
      });
      expect(current).toEqual({});
    });
    it('should not error if required filter is on and there is a value', () => {
      const {
        result: {
          current
        }
      } = renderHook(() => useValidationMessage('value', true), {
        wrapper
      });
      expect(current).toEqual({});
    });
  });
});
//# sourceMappingURL=use_validation_message.spec.js.map