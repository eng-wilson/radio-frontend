import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import GlobalStyle from './styles/theme/global';

import { socket, SocketContext } from './services/socket';
import { theme } from './styles/theme/default';
import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <SocketContext.Provider value={socket}>
          <GlobalStyle />
          <Home />
        </SocketContext.Provider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
