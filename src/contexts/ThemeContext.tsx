import { createContext, useState, ReactNode, useContext } from 'react';

import light from '../themes/light';

type Theme = {
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

type ThemeContextData = {
  theme: Theme
}

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeContext.Provider value={{ theme }} >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
}