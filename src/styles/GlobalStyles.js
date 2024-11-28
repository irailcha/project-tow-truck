import 'modern-normalize/modern-normalize.css';
import { createGlobalStyle } from 'styled-components';
import './fonts/DMSerifText-Regular.ttf';
import './fonts/PTSerif-Bold.ttf';
import './fonts/PTSerif-Regular.ttf';
import './fonts/Gatsby-Normal.woff';

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Gatsby Normal';
    src: url('./fonts/Gatsby-Normal.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
     @font-face {
    font-family: 'Gatsby Normal';
    src: url('./fonts/Gatsby-Normal.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
     @font-face {
    font-family: 'Gatsby Normal';
    src: url('./fonts/Gatsby-Normal.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DM Serif Text';
    src: url('./fonts/DMSerifText-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Serif';
    src: url('./fonts/PTSerif-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Serif Bold';
    src: url('./fonts/PTSerif-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }


  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    position: relative;
    font-family: 'PT Serif', serif;
    line-height: 1;
    padding: 25px 15px;
    background-color: #0d1b2a;
    color: #e0e1dd;
  }

  h1, h2, h3 {
    font-family: 'DM Serif Text', serif;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 12px;
    height: auto;
  }

  .container {
    max-width: 1440px;
    margin: 0;
    padding: 0 60px;
  }

  .section {
    padding: 30px 0;
  }
`;

export default GlobalStyles;
