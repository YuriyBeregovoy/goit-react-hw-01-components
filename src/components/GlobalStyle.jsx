import { createGlobalStyle } from 'styled-components'
import "modern-normalize"



export const GlobalStyle = createGlobalStyle`


:root {
  --page-background-color: #ffffff;
  --body-text-color: #434455;
  --title-section-color: #2e2f42;
  --primary-brand-color: #4d5ae5;
  --pressed-state-color: #404bbf;
  --light-mode-color: #f4f4fd;
  --accent-botton-color: #e7e9fc;
  --bg-gradient-color: rgba(46, 47, 66, 0.7);
  --light-slate-color: #8e8f99;
  --success-color: #31d0aa;
  --timing-function: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --bg-modal-color: #fcfcfc;
}



body {
  min-width: 320px;
  background-color: var(--light-mode-color);
  color: var(--body-text-color);
  font-family: 'Roboto', 'sans-serif';
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Reset styles */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


address{
  font-style: normal;
}

.container {
  width: 100%;
  max-width: 428px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}
`;