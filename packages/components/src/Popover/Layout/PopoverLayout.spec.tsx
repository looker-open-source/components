/*

 MIT License

 Copyright (c) 2024 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Article as IconArticle } from '@styled-icons/material';
import { screen } from '@testing-library/react';
import { ButtonTransparent } from '../../Button';
import { Icon } from '../../Icon';
import { PopoverLayout } from '.';

function Basic() {
  return <PopoverLayout>We the People of the United States</PopoverLayout>;
}

function FooterCloseButton() {
  return (
    <PopoverLayout
      closeButton={
        <ButtonTransparent color="neutral" size="small">
          Close
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  );
}

function Full() {
  return (
    <PopoverLayout
      footer={
        <ButtonTransparent color="neutral" size="small">
          Cancel
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  );
}

function Header() {
  return (
    <PopoverLayout footer={false} header="Header Text">
      We the People of the United States
    </PopoverLayout>
  );
}

function HeaderHideHeading() {
  return (
    <PopoverLayout header="Header text" hideHeader>
      We the People of the United States
    </PopoverLayout>
  );
}

function HeaderIconBefore() {
  return (
    <PopoverLayout
      headerIconBefore={
        <Icon icon={<IconArticle />} aria-label="Article icon" />
      }
      header="Preamble"
    >
      We the People of the United States
    </PopoverLayout>
  );
}

describe('PopoverLayout', () => {
  test('basic display has footer ', () => {
    renderWithTheme(<Basic />);
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  test('hideHeading prop hides Header', () => {
    renderWithTheme(<HeaderHideHeading />);
    const hiddenHeader = screen.getByText('Header text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });

  test('headerIconBefore prop renders specified icon', () => {
    renderWithTheme(<HeaderIconBefore />);
    const headerText = screen.getByText('Preamble');
    expect(headerText).toBeVisible();
    expect(screen.getByLabelText('Article icon')).toBeVisible();
  });

  test('Header and no Footer ', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Done')).not.toBeInTheDocument();
  });

  test('Footer with CloseButton', () => {
    renderWithTheme(<FooterCloseButton />);
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Done')).not.toBeInTheDocument();
  });

  test('With header & footer display only "Done" button', () => {
    renderWithTheme(<Full />);
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  test('FooterExtraValue ', () => {
    renderWithTheme(<Full />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
