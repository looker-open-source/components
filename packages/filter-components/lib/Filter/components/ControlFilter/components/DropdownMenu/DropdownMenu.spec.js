import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { DropdownMenu } from './DropdownMenu';
const options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}];
describe('DropdownMenu tests', () => {
  describe('anyOption', () => {
    it('true – able to clear the filter value', () => {
      const onChange = jest.fn();
      renderWithTheme(React.createElement(DropdownMenu, {
        value: 'value1',
        options: options,
        onChange: onChange,
        anyOption: true
      }));
      const clearButton = screen.getByText('Clear Field');
      fireEvent.click(clearButton);
      expect(onChange).toHaveBeenCalledWith('');
    });
    it('undefined – unable to clear the filter value', () => {
      const onChange = jest.fn();
      renderWithTheme(React.createElement(DropdownMenu, {
        value: 'value1',
        options: options,
        onChange: onChange
      }));
      expect(screen.queryByText('Clear Field')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=DropdownMenu.spec.js.map