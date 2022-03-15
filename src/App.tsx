import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LiveChatWidget } from '@livechat/widget-react';

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
      <Home />
      <LiveChatWidget
        license="13178247"
        visibility="minimized"
        group="Palpiteiro"
      />
      <Footer />
    </>
  );
}

export default App;
