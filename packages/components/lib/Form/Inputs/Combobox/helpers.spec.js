import { closeCombobox, getAllComboboxOptionText, getComboboxOptions, getComboboxOptionText, openCombobox, renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption } from './';
describe('Combobox helpers', () => {
  const renderCombobox = () => renderWithTheme(React.createElement(Combobox, {
    onChange: jest.fn()
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101",
    onClick: jest.fn()
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  }))));

  test('openCombobox opens the combobox using the provided placeholder text', () => {
    renderCombobox();
    openCombobox('Type here');
    expect(screen.getByText('Foo')).toBeVisible();
    closeCombobox();
  });
  test('closeCombobox closes any open comboboxes', () => {
    renderCombobox();
    openCombobox('Type here');
    expect(screen.getByText('Foo')).toBeVisible();
    closeCombobox();
    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
  });
  test('getComboboxOptions returns the expected number of options for an open Combobox', () => {
    renderCombobox();
    openCombobox('Type here');
    expect(getComboboxOptions()).toHaveLength(2);
    closeCombobox();
  });
  test('getComboboxOptionText returns the expected text content of the provided option element', () => {
    renderCombobox();
    openCombobox('Type here');
    const options = getComboboxOptions();
    expect(getComboboxOptionText(options[0])).toEqual('Foo');
    expect(getComboboxOptionText(options[1])).toEqual('Bar');
    closeCombobox();
  });
  test('getAllComboboxOptionText returns the expected text content of the provided option element', () => {
    renderCombobox();
    openCombobox('Type here');
    const optionTexts = getAllComboboxOptionText();
    expect(optionTexts).toMatchInlineSnapshot(`
      Array [
        "Foo",
        "Bar",
      ]
    `);
    closeCombobox();
  });
});
//# sourceMappingURL=helpers.spec.js.map