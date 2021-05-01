import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string,
      colorPrimaryLite: string,
      colorSecondary: string,
      colorWhite: string,
      colorWhiteLite: string,
      colorYellow: string,

      shadow1: string,

      backgroundPrimary: string,
      backgroundSeconday: string,
  
      borderColor: string,
      borderColor2: string,
  
      fontPrimary: string,
      fontSecondary: string,
      fontWhite: string
    }
  }
}