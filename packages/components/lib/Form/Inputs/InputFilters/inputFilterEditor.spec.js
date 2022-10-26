import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { inputFilterEditor } from './inputFilterEditor';
describe('inputFilterEditor', () => {
  const closeEditor = jest.fn();
  const filterOptions1 = {
    field: 'persistance-type',
    label: 'Persistance Type',
    multiple: true,
    options: ['datagroup_trigger', 'datagroup_trigger1', 'datagroup_trigger2']
  };
  const filterOptions2 = {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda']
  };
  const value = 'user';
  const onChange = jest.fn();
  test('renders', () => {
    renderWithTheme(React.createElement(React.Fragment, null, inputFilterEditor({
      closeEditor,
      filterOptions: filterOptions1,
      onChange,
      value
    })));
    expect(screen.getByText('datagroup_trigger')).toBeInTheDocument();
  });
  test('onChange is called', () => {
    renderWithTheme(React.createElement(React.Fragment, null, inputFilterEditor({
      closeEditor,
      filterOptions: filterOptions1,
      onChange,
      value
    })));
    const selectingFilter = screen.queryByText('datagroup_trigger');
    selectingFilter && fireEvent.click(selectingFilter);
    expect(onChange).toBeCalled();
  });
  test('closeEditor is called', () => {
    renderWithTheme(React.createElement(React.Fragment, null, inputFilterEditor({
      closeEditor,
      filterOptions: filterOptions2,
      onChange,
      value
    })));
    const selectingFilter = screen.queryByText('Cheddar');
    selectingFilter && fireEvent.click(selectingFilter);
    expect(closeEditor).toBeCalled();
  });
  test('displays CheckboxGroup when multiple = true', () => {
    renderWithTheme(React.createElement(React.Fragment, null, inputFilterEditor({
      closeEditor,
      filterOptions: _objectSpread(_objectSpread({}, filterOptions2), {}, {
        multiple: true
      }),
      onChange,
      value
    })));
    const checkbox = screen.getByLabelText('Gouda');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });
  test('displays RadioGroup when multiple = false', () => {
    renderWithTheme(React.createElement(React.Fragment, null, inputFilterEditor({
      closeEditor,
      filterOptions: filterOptions2,
      onChange,
      value
    })));
    const radio = screen.getByLabelText('Gouda');
    expect(radio).toHaveAttribute('type', 'radio');
  });
});
//# sourceMappingURL=inputFilterEditor.spec.js.map