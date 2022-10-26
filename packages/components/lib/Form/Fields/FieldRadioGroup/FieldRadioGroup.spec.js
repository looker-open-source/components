import _extends from "@babel/runtime/helpers/extends";
import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import map from 'lodash/map';
import { fieldOptions } from '../../../fixtures/CheckboxRadio';
import { FieldRadioGroup } from './FieldRadioGroup';
const fieldRadioProps = {
  defaultValue: 'cheddar',
  id: '1',
  name: 'group1',
  options: fieldOptions
};
test('FieldRadioGroup render a radio list', () => {
  const extractCheckboxFromDomList = list => {
    const options = list.getElementsByTagName('label');
    return map(options, el => {
      return el.textContent;
    });
  };

  const renderListContent = () => {
    renderWithTheme(React.createElement(FieldRadioGroup, _extends({}, fieldRadioProps, {
      required: true
    })));
    return screen.getByTestId('radio-list');
  };

  const view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
//# sourceMappingURL=FieldRadioGroup.spec.js.map