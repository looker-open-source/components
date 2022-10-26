let _ = t => t,
    _t,
    _t2;

import React from 'react';
import styled from 'styled-components';
import { Grid } from '../Grid';
import { Aside } from './Aside';
import { Footer } from './Footer';
import { Header } from './Header';
import { Layout } from './Layout';
import { Section } from './Section';
export default {
  title: 'Semantics Layout'
};
export const CommonLayouts = () => React.createElement(CustomGrid, {
  columns: 3
}, React.createElement(HeaderLayoutAsideMain, null), React.createElement(AsideMainFooter, null), React.createElement(HeaderLayoutAsideMainFooter, null), React.createElement(AsideLayoutHeaderMainFooter, null), React.createElement(AsideLayoutHeaderLayoutLayoutMainAsideFooter, null));

const HeaderLayoutAsideMain = () => React.createElement(Highlighter, null, React.createElement(Layout, null, React.createElement(Header, null, "Header"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  width: "20%"
}, "Aside"), React.createElement(Section, null, "Section"))));

const HeaderLayoutAsideMainFooter = () => React.createElement(Highlighter, null, React.createElement(Layout, null, React.createElement(Header, null, "Header"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  width: "20%"
}, "Aside"), React.createElement(Section, null, "Section")), React.createElement(Footer, null, "Footer")));

const AsideMainFooter = () => React.createElement(Highlighter, null, React.createElement(Layout, null, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  width: "20%"
}, "Aside"), React.createElement(Section, null, "Section")), React.createElement(Footer, null, "Footer")));

const AsideLayoutHeaderMainFooter = () => React.createElement(Highlighter, null, React.createElement(Layout, null, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  width: "20%"
}, "Aside"), React.createElement(Layout, null, React.createElement(Header, null, "Header"), React.createElement(Section, null, "Section"), React.createElement(Footer, null, "Footer")))));

const AsideLayoutHeaderLayoutLayoutMainAsideFooter = () => React.createElement(Highlighter, null, React.createElement(Layout, null, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  width: "20%"
}, "Aside"), React.createElement(Layout, null, React.createElement(Header, null, "Header"), React.createElement(Layout, null, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Section, null, "Section"), React.createElement(Aside, {
  width: "40%"
}, "Aside"))), React.createElement(Footer, null, "Footer")))));

const CustomGrid = styled(Grid).withConfig({
  displayName: "Semanticsstories__CustomGrid",
  componentId: "sc-3avxxi-0"
})(_t || (_t = _`
  grid-auto-rows: 12rem;
`));
const Highlighter = styled.div.withConfig({
  displayName: "Semanticsstories__Highlighter",
  componentId: "sc-3avxxi-1"
})(_t2 || (_t2 = _`
  /* Emulate Page behavior for demos */
  height: 100%;
  & > ${0} {
    height: 100%;
  }

  /* stylelint-disable color-named */

  ${0}, ${0} {
    background-color: lightskyblue;
  }

  ${0} {
    background-color: lightsalmon;
  }

  ${0} {
    background-color: lightseagreen;
  }
`), Layout, Header, Footer, Aside, Section);
//# sourceMappingURL=Semantics.stories.js.map