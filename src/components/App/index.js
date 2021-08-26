import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';

import Landing from '../Landing';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Landing />

    </ThemeProvider>
  );
}

export default App;
