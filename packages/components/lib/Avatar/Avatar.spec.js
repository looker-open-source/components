import { renderWithTheme } from '@looker/components-test-utils';
import { Code } from '@styled-icons/material';
import { AccountCircle } from '@styled-icons/material-outlined';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { AvatarCombo } from './AvatarCombo';
import { AvatarIcon } from './AvatarIcon';
import { AvatarUser } from './AvatarUser';
describe('Avatar', () => {
  describe('AvatarCombo', () => {
    test('supports role as button & onClick event', () => {
      const fauxOnClick = jest.fn();
      renderWithTheme(React.createElement(AvatarCombo, {
        secondaryIcon: React.createElement(AccountCircle, null),
        onClick: fauxOnClick,
        role: "button"
      }));
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(fauxOnClick.mock.calls.length).toBe(1);
    });
    test('user', () => {
      renderWithTheme(React.createElement(AvatarCombo, {
        secondaryIcon: React.createElement(AccountCircle, null),
        user: {
          avatar_url: 'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
          first_name: 'John',
          last_name: 'Smith'
        }
      }));
      expect(screen.getByLabelText('John Smith')).toBeInTheDocument();
    });
  });
  describe('AvatarIcon', () => {
    test('supports role as button & onClick event', () => {
      const fauxOnClick = jest.fn();
      renderWithTheme(React.createElement(AvatarIcon, {
        onClick: fauxOnClick,
        role: "button"
      }));
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(fauxOnClick.mock.calls.length).toBe(1);
    });
    test('renders different icon if specified', () => {
      renderWithTheme(React.createElement(AvatarIcon, {
        "aria-label": "Code",
        icon: React.createElement(Code, null)
      }));
      expect(screen.getByLabelText('Code')).toBeInTheDocument();
    });
  });
  describe('AvatarUser', () => {
    test('shows user profile picture if it has good avatar_url ', () => {
      const data = {
        avatar_url: 'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
        first_name: 'John',
        last_name: 'Smith'
      };
      renderWithTheme(React.createElement(AvatarUser, {
        user: data
      }));
      const image = screen.queryByTestId('avatar-photo');
      expect(image).toBeInTheDocument();
      expect(screen.getByLabelText('John Smith')).toBeInTheDocument();
    });
    test('shows initials if it has null as avatar_url ', () => {
      const data = {
        avatar_url: null,
        first_name: 'John',
        last_name: 'Smith'
      };
      renderWithTheme(React.createElement(AvatarUser, {
        user: data
      }));
      const image = screen.queryByTestId('avatar-photo');
      expect(image).not.toBeInTheDocument();
    });
  });
  test('supports role as button & onClick event', () => {
    const fauxOnClick = jest.fn();
    renderWithTheme(React.createElement(AvatarUser, {
      onClick: fauxOnClick,
      role: "button"
    }));
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(fauxOnClick.mock.calls.length).toBe(1);
  });
});
//# sourceMappingURL=Avatar.spec.js.map