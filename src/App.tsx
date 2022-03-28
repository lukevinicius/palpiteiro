import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Aos from 'aos';
import { GlobalStyle } from './styles/global';
import { Home } from './screens/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  Aos.init();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
