import _extends from "@babel/runtime/helpers/extends";
import 'jest-styled-components';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import map from 'lodash/map';
import { fieldOptions } from '../../../fixtures/CheckboxRadio';
import { FieldCheckboxGroup } from './FieldCheckboxGroup';
const fieldCheckboxProps = {
  defaultValue: ['swiss', 'cheddar'],
  id: '1',
  name: 'group1',
  options: fieldOptions
};
test('FieldCheckboxGroup render a list of checkbox', () => {
  const extractCheckboxFromDomList = list => {
    const options = list.getElementsByTagName('label');
    return map(options, el => {
      return el.textContent;
    });
  };

  const renderListContent = () => {
    renderWithTheme(React.createElement(FieldCheckboxGroup, fieldCheckboxProps));
    return screen.getByTestId('checkbox-list');
  };

  const view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('FieldCheckboxGroup checkbox onChange is working as expected', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(FieldCheckboxGroup, _extends({}, fieldCheckboxProps, {
    defaultValue: [],
    onChange: handleChange
  })));
  const Cheddar = screen.getByLabelText('Cheddar');
  const Gouda = screen.getByLabelText('Gouda');
  fireEvent.click(Cheddar);
  expect(handleChange).toHaveBeenCalledWith(['cheddar']);
  fireEvent.click(Gouda);
  expect(handleChange).toHaveBeenCalledWith(['cheddar', 'gouda']);
});
//# sourceMappingURL=FieldCheckboxGroup.spec.js.map