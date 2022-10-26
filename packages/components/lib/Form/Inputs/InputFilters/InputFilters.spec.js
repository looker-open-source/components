import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { filters } from '../../../fixtures/filters';
import { InputFilters } from './';

const ControlledComponent = () => {
  const [controlledFilters, onChange] = useState(filters);
  return React.createElement(InputFilters, {
    filters: controlledFilters,
    onChange: onChange
  });
};

describe('InputFilters', () => {
  test('renders', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    expect(screen.getByPlaceholderText('Filter List')).toBeInTheDocument();
  });
  test('placeholder', () => {
    renderWithTheme(React.createElement(InputFilters, {
      onChange: () => null,
      filters: [],
      placeholder: "Hello world"
    }));
    expect(screen.getByPlaceholderText('Hello world')).toBeInTheDocument();
  });
  test('Displays list of filters', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    const input = screen.getByPlaceholderText('Filter List');
    fireEvent.click(input);
    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Origin')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Clicking on a filter item will displays list of second layer filters ', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    const input = screen.getByPlaceholderText('Filter List');
    fireEvent.click(input);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Color')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.queryByText('Color')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Shows editing options ', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    const input = screen.getByPlaceholderText('Filter List');
    fireEvent.click(input);
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    expect(screen.getByText('Cheddar')).toBeInTheDocument();
    expect(screen.getByText('Gouda')).toBeInTheDocument();
    expect(screen.getByText('Swiss')).toBeInTheDocument();
    expect(screen.getByText('Mozzarella')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Display full filter selected', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    const input = screen.getByPlaceholderText('Filter List');
    fireEvent.click(input);
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Swiss'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test("Doesn't show filter displayed as chip", () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Swiss'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    fireEvent.click(document);
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.queryByText('Name')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Display a second filter as chip', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Swiss'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    expect(screen.getByText(/Swiss/)).toBeInTheDocument();
    fireEvent.click(document);
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    fireEvent.click(screen.getByText('Color'));
    fireEvent.click(screen.getByText('blue'));
    expect(screen.getByText('color:')).toBeInTheDocument();
    expect(screen.getAllByText('blue').length).toEqual(2);
    fireEvent.click(document);
  });
  test('Change filter values when multiple = false', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Cheddar'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    expect(screen.getByText(/Cheddar/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('name:'));
    fireEvent.click(screen.getByText('Swiss'));
    expect(screen.getByText(/Swiss/)).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Change filter values when multiple = true', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Color')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Color'));
    fireEvent.click(screen.getByText('blue'));
    fireEvent.click(screen.getByText('white'));
    fireEvent.click(document);
    expect(screen.getByText('color:')).toBeInTheDocument();
    expect(screen.getByText(/blue/)).toBeInTheDocument();
    expect(screen.getByText(/white/)).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Delete filter', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Gouda'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    fireEvent.click(document);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('name:')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Delete multiple filter', () => {
    renderWithTheme(React.createElement(ControlledComponent, null));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Name'));
    fireEvent.click(screen.getByText('Gouda'));
    expect(screen.getByText('name:')).toBeInTheDocument();
    fireEvent.click(document);
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    fireEvent.click(screen.getByText('Color'));
    fireEvent.click(screen.getByText('yellow'));
    fireEvent.click(screen.getByText('orange'));
    fireEvent.click(document);
    expect(screen.getByText('color:')).toBeInTheDocument();
    expect(screen.getByText(/yellow/)).toBeInTheDocument();
    expect(screen.getByText(/orange/)).toBeInTheDocument();
    expect(screen.getByText('name:')).toBeInTheDocument();
    expect(screen.getByText(/Gouda/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Clear Filters'));
    expect(screen.queryByText('color:')).not.toBeInTheDocument();
    expect(screen.queryByText('name:')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Editor component is displayed if passed', () => {
    const EditorComponent = () => React.createElement(React.Fragment, null, "hello world");

    const onChange = jest.fn();
    const editorFilter = [{
      editor: EditorComponent,
      field: 'editor',
      label: 'Important',
      options: ['a', 'b', 'c']
    }];
    renderWithTheme(React.createElement(InputFilters, {
      filters: editorFilter,
      onChange: onChange
    }));
    fireEvent.click(screen.getByPlaceholderText('Filter List'));
    expect(screen.getByText('Important')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Important'));
    expect(screen.getByText('hello world')).toBeInTheDocument();
    fireEvent.click(document);
  });
});
//# sourceMappingURL=InputFilters.spec.js.map