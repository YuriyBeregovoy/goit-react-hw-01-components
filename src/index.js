import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
  pageBackgroundColor: "#ffffff",
  bodyTextColor: "#434455",
  titleSectionColor: "#2e2f42",
  primaryBrandColor: "#4d5ae5",
  pressedStateColor: "#404bbf",
  lightModeColor: "#f4f4fd",
  accentBottonColor: "#e7e9fc",
  lightSlateColor: "#8e8f99",
  successColor: "#31d0aa",
  },

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
