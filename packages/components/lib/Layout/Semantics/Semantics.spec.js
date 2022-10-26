import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Aside } from './Aside/Aside';
import { Footer, Header, Layout, Page, Section } from './';
describe('Semantics', () => {
  test('whole page scrolls together by default', () => {
    renderWithTheme(React.createElement(Page, null, React.createElement(Header, {
      height: "4rem",
      px: "large"
    }, "I'm the header"), React.createElement(Layout, {
      hasAside: true
    }, React.createElement(Aside, null, "I'm the Aside before"), React.createElement(Section, null, "I'm the main area")), React.createElement(Footer, {
      height: "4rem",
      px: "large"
    }, "I'm the Footer")));
    expect(screen.getByText("I'm the Aside before")).toBeInTheDocument();
    expect(screen.getByText("I'm the header").closest('div')).toHaveStyle('overflow: auto;');
  });
  test('using prop fixed on page will have Header and Footer fixed while the rest of the page scrolls', () => {
    renderWithTheme(React.createElement(Page, {
      fixed: true
    }, React.createElement(Header, {
      height: "4rem",
      px: "large"
    }, "I'm the header"), React.createElement(Layout, {
      hasAside: true
    }, React.createElement(Aside, null, "I'm the Aside before"), React.createElement(Section, null, "I'm the main area")), React.createElement(Footer, {
      height: "4rem",
      px: "large"
    }, "I'm the Footer")));
    expect(screen.getByText("I'm the Aside before")).toBeInTheDocument();
    expect(screen.getByText("I'm the header").closest('div')).toHaveStyle('overflow: hidden;');
  });
  test('using prop scrollWithin will have areas scrolling together.', () => {
    renderWithTheme(React.createElement(Page, {
      fixed: true
    }, React.createElement(Layout, {
      hasAside: true
    }, React.createElement(Aside, {
      scrollWithin: true
    }, "I'm the Aside before"), React.createElement(Section, {
      scrollWithin: true
    }, "I'm the main area"), React.createElement(Aside, {
      scrollWithin: true
    }, "I'm the Aside after"))));
    expect(screen.getByText("I'm the Aside before")).toHaveStyle('height: fit-content;');
    expect(screen.getByText("I'm the main area")).toHaveStyle('height: fit-content;');
    expect(screen.getByText("I'm the Aside after")).toHaveStyle('height: fit-content;');
  });
  test('using prop scrollWithin will have only selected areas scrolling together.', () => {
    renderWithTheme(React.createElement(Page, {
      fixed: true
    }, React.createElement(Layout, {
      hasAside: true
    }, React.createElement(Aside, null, "I'm the Aside before"), React.createElement(Layout, {
      hasAside: true
    }, React.createElement(Section, {
      scrollWithin: true
    }, "I'm the main area"), React.createElement(Aside, {
      scrollWithin: true
    }, "I'm the Aside after")))));
    expect(screen.getByText("I'm the Aside before")).not.toHaveStyleRule('height');
    expect(screen.getByText("I'm the main area")).toHaveStyle({
      height: 'fit-content'
    });
    expect(screen.getByText("I'm the Aside after")).toHaveStyle({
      height: 'fit-content'
    });
  });
});
//# sourceMappingURL=Semantics.spec.js.map