import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';

ReactDOM.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
