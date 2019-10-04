import { css, createGlobalStyle } from 'styled-components'

const fonts = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro&display=swap');

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
