import React from 'react';
import Home from './pages/Home';

import { socket, SocketContext } from './services/socket';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Home />
    </SocketContext.Provider>
  );
}

export default App;
