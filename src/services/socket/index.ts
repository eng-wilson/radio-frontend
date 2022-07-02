import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io('localhost:3333/', { transports: ['websocket'] });

export const SocketContext = createContext(socket);
