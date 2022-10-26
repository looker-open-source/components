import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { fontFacesCSS, FontFaceLoader } from './FontFaceLoader';
HelmetProvider.canUseDOM = false;
const fontSources = [{
  url: 'http//magic.com'
}, {
  face: 'Curly',
  url: 'http//moe.com/curly.ttf'
}];
describe('FontFaceLoader', () => {
  it('Font face with URL', () => {
    expect(fontFacesCSS([fontSources[1]])).toMatchInlineSnapshot(`
      "
      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }"
    `);
  });
  it('URL only (Google font)', () => {
    expect(fontFacesCSS([fontSources[0]])).toMatchInlineSnapshot(`
      "
      @import url(http//magic.com);"
    `);
  });
  it('Multiple fonts', () => {
    expect(fontFacesCSS(fontSources)).toMatchInlineSnapshot(`
      "
      @import url(http//magic.com);

      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }"
    `);
  });
  it('Does nothing if fontSource undefined', () => {
    const context = {};
    render(React.createElement(HelmetProvider, {
      context: context
    }, React.createElement(ThemeProvider, {
      theme: {}
    }, React.createElement(FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toEqual('');
  });
  it('Does nothing if fontSource empty', () => {
    const context = {};
    render(React.createElement(HelmetProvider, {
      context: context
    }, React.createElement(ThemeProvider, {
      theme: {
        themeSources: []
      }
    }, React.createElement(FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toEqual('');
  });
  it('theme.fontSources has entries', () => {
    const context = {};
    render(React.createElement(HelmetProvider, {
      context: context
    }, React.createElement(ThemeProvider, {
      theme: {
        fontSources
      }
    }, React.createElement(FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toMatchInlineSnapshot(`
      "<style data-rh=\\"true\\" type=\\"text/css\\">
      @import url(http//magic.com);

      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }</style>"
    `);
  });
});
//# sourceMappingURL=FontFaceLoader.spec.js.map