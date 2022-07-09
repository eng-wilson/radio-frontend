import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green400: string;
      green600: string;
      green900: string;

      red500: string;

      pink500: string;

      purple400: string;
      purple600: string;

      blue500: string;
      blue600: string;

      yellow900: string;
    };
  }
}
