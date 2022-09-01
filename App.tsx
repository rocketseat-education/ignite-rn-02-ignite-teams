import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
