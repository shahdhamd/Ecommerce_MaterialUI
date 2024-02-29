import './App.css';
import Header1 from './components/Navbar/Header1';
import Header2 from './components/Navbar/Header2';
import Header3 from './components/Navbar/Header3';
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from './components/Hero/Hero';
import Service from './components/Hero/Service';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/Scroll/ScrollTop.jsx';
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>  {/* من اجل الدارك مود */}
      <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header1 />
      <Header2 />
      <Header3 />

      <Hero/>
      <Main/>
      {/* <Service/> */}
      <Footer/>
      <ScrollTop/>
      </ThemeProvider>

      </ColorModeContext.Provider>

  );
}

export default App;



