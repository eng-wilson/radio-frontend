import React, { createContext, ReactNode, useContext, useState } from 'react';

interface NicknameProviderProps {
  children: ReactNode;
}

interface NicknameProps {
  nickname: string;
  setNickname: (value: string) => void;
}

const NicknameContext = createContext({} as NicknameProps);

const NicknameProvider = ({ children }: NicknameProviderProps) => {
  const [nickname, setNickname] = useState('');

  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
};

const useNickname = () => {
  const context = useContext(NicknameContext);

  return context;
};

export { NicknameProvider, useNickname };
