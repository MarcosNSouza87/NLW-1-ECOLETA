import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      info: string;
      green: string;
    };
    background: string;
    blocks: string;
    text: string;
    textTitle: string;
    textSuport: string;
  }
}