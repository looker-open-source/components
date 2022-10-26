import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ModalContent } from './ModalContent';
const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
afterAll(() => {
  originalScrollHeight && Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
  originalOffsetHeight && Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
});
describe('ModalContent', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(ModalContent, null, "Stuff"));
    const modalContent = screen.getByText('Stuff');
    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toHaveStyleRule('padding-top');
    expect(modalContent).toHaveStyleRule('padding-bottom');
  });
  test('display xxxsmall padding if both hasHeader & hasFooter', () => {
    renderWithTheme(React.createElement(ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('has no box shadow when it does not overflow', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500
    });
    renderWithTheme(React.createElement(ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(getComputedStyle(screen.getByText('Stuff')).getPropertyValue('box-shadow')).toEqual('');
  });
  test('has a box shadow when it overflows', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0
    });
    renderWithTheme(React.createElement(ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(getComputedStyle(screen.getByText('Stuff')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
});
//# sourceMappingURL=ModalContent.spec.js.map