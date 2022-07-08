import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io('https://wilson-radio-server.herokuapp.com/', {
  transports: ['websocket'],
});

export const SocketContext = createContext(socket);
