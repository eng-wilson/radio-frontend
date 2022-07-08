import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0px;
    padding: 0px;

    font-family: 'Inter', sans-serif;
  }

  body {
    background: #0e0e10;
  }

  ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #262626;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #575757;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyle;
