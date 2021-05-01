import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './ThemeContext';

type ThemeProviderLayoutProps = {
  children: ReactNode
}

export default function ThemeProviderLayout({ children }: ThemeProviderLayoutProps) {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}