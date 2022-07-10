import { createContext } from 'react';
import { io } from 'socket.io-client';

const apiURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEV_URL
    : process.env.REACT_APP_API_PROD_URL;

export const socket = io(apiURL || '', {
  transports: ['websocket'],
});

export const SocketContext = createContext(socket);
