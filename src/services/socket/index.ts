import { createContext } from 'react';
import { io } from 'socket.io-client';

const apiURL =
  process.env.NODE_ENV === 'development'
    ? process.env.API_DEV_URL
    : process.env.API_PROD_URL;

export const socket = io(apiURL || '', {
  transports: ['websocket'],
});

export const SocketContext = createContext(socket);
