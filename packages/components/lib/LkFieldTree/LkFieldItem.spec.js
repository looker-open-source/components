import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { LkFieldItem } from '.';
describe('LkFieldItem', () => {
  test('Renders children', () => {
    renderWithTheme(React.createElement(LkFieldItem, null, "Dimension"));
    screen.getByText('Dimension');
  });
  test('Accepts onClick and onKeyDown props', () => {
    const handleClick = jest.fn();
    const handleKeyDown = jest.fn();
    renderWithTheme(React.createElement(LkFieldItem, {
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }, "Dimension"));
    screen.getByText('Dimension');
  });
  test('Does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(LkFieldItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('Triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(LkFieldItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: false
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
  test('Hides and shows detail when hoverDisclosure === true', () => {
    renderWithTheme(React.createElement(LkFieldItem, {
      detail: {
        content: 'Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Label"));
    expect(screen.queryByText('Detail')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByText('Label'), {
      bubbles: true
    });
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });
});
//# sourceMappingURL=LkFieldItem.spec.js.map