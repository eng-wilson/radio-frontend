import React, { PropsWithChildren } from 'react';
import { NicknameProvider } from './useNickname';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <NicknameProvider>{children}</NicknameProvider>
);

export default AppProvider;
