import { css, createGlobalStyle } from 'styled-components'

/*
 * @TODO - Explore local loading of font files.
 *

import openSansSemi from '../fonts/open-sans-600.woff2'
import openSansRegular from '../fonts/open-sans-regular.woff2'

const fontFaces = css`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${openSansRegular}) format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
      url(${openSansSemi}) format('woff');
  }
`
*/

const fonts = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

  body,
  button,
  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
  }
`

const reset = css`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.colors.palette.white};
  }
`

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
`
