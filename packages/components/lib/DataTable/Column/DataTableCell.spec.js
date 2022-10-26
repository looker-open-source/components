import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataTableCell } from './DataTableCell';
describe('DataTableCell', () => {
  test('Basic content', () => {
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, null, "Cell content")))));
    expect(screen.getByText('Cell content')).toBeInTheDocument();
  });
  test('indicator', () => {
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, {
      indicator: "FauxIcon"
    }, "Cell content")))));
    expect(screen.getByText('FauxIcon')).toBeInTheDocument();
  });
  test('description & indicator', () => {
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, {
      indicator: "FauxIcon",
      description: "descriptive text"
    }, "Cell content")))));
    expect(screen.getByText('descriptive text')).toBeInTheDocument();
    expect(screen.getByText('FauxIcon')).toBeInTheDocument();
  });
  test('onKeyUp callback', () => {
    const onKeyUp = jest.fn();
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, {
      onKeyUp: onKeyUp
    }, "Cell content")))));
    fireEvent.keyUp(screen.getByText('Cell content'), {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
  test('keyup triggers :focus-visible blur removes', () => {
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, null, "Cell content")))));
    const cell = screen.getByText('Cell content');
    const td = cell.closest('td');
    expect(td).toHaveStyleRule('outline', 'none');
    fireEvent.keyUp(cell, {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });
    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0');
    fireEvent.blur(cell);
    expect(td).toHaveStyleRule('outline', 'none');
  });
  test('onClick callback + unset :focus-visible', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, {
      onClick: onClick
    }, "Cell content")))));
    const cell = screen.getByText('Cell content');
    const td = cell.closest('td');
    fireEvent.keyUp(cell, {
      key: 'Enter'
    });
    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0');
    userEvent.click(cell);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('tabIndex set properly on tabbable ', () => {
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, null, React.createElement("button", null, "Click here"))))));
    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '-1');
  });
  test('onBlur callback', () => {
    const onBlur = jest.fn();
    renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(DataTableCell, {
      onBlur: onBlur
    }, "Cell content")))));
    const cell = screen.getByText('Cell content');
    cell.focus();
    userEvent.tab();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=DataTableCell.spec.js.map