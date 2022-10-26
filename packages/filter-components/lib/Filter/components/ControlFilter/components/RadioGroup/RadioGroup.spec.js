import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';
const options = [{
  label: 'label1',
  value: 'value1',
  name: 'radioSpec'
}, {
  label: 'label2',
  value: 'value2',
  name: 'radioSpec'
}, {
  label: 'label3',
  value: 'value3',
  name: 'radioSpec'
}];
describe('RadioGroup tests', () => {
  it('renders any value', () => {
    renderWithTheme(React.createElement(RadioGroup, {
      value: '',
      options: options,
      onChange: jest.fn(),
      anyOption: true
    }));
    expect(screen.getByLabelText('any value')).toBeChecked();
  });
  it('handles loading state', () => {
    renderWithTheme(React.createElement(RadioGroup, {
      isLoading: true,
      value: 'value1',
      options: options,
      onChange: jest.fn()
    }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=RadioGroup.spec.js.map