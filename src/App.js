import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/Themes/default';

import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <GlobalStyle />
     <Header />
     <Home />
    </ThemeProvider>
  );
}

export default App;
