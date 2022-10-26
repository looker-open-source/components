import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { TagList } from './TagList';
describe('TagList tests', () => {
  jest.useFakeTimers();
  describe('on `inputchange`', () => {
    const filterOptions = optionText => {
      const input = screen.getByPlaceholderText('any value');
      fireEvent.change(input, {
        target: {
          value: optionText
        }
      });
    };

    describe('when options are more than 999', () => {
      it('should trigger the input change handler', async () => {
        const value = [];
        const onInputChange = jest.fn();
        const options1000 = Array.from(Array(1000), (_, i) => ({
          label: String(i),
          value: String(i)
        }));
        const Component = React.createElement(TagList, {
          value: value,
          options: options1000,
          onChange: jest.fn(),
          onInputChange: onInputChange
        });
        renderWithTheme(Component);
        filterOptions('label1');
        act(() => {
          jest.runAllTimers();
        });
        await waitFor(() => {
          expect(onInputChange).toHaveBeenCalledWith('label1');
        });
      });
    });
  });
});
//# sourceMappingURL=TagList.spec.js.map