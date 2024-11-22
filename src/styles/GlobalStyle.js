import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    font-size: 62.5%;
    vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
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
    line-height: 1;
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

  /* Light Weight */
  @font-face {
    font-family: 'Elice DX Neolli';
    src: url('/src/assets/fonts/EliceDXNeolliOTF-Light.otf') format('opentype');
    font-weight: 300; /* Light */
    font-style: normal;
  }

  /* Medium Weight */
  @font-face {
    font-family: 'Elice DX Neolli';
    src: url('/src/assets/fonts/EliceDXNeolliOTF-Medium.otf') format('opentype');
    font-weight: 500; /* Medium */
    font-style: normal;
  }

  /* Bold Weight */
  @font-face {
    font-family: 'Elice DX Neolli';
    src: url('/src/assets/fonts/EliceDXNeolliOTF-Bold.otf') format('opentype');
    font-weight: 700; /* Bold */
    font-style: normal;
  }

  /* Global font-family 적용 */
  body {
    font-family: 'Elice DX Neolli', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
