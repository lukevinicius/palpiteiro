import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary:      #2EBC81;
    --primaryDark:  #283CA5;
    --secundary:    #212121;
    --success:      #43A047;
    --danger:       #E53935;
    --warning:      #FFB300;
    --title:        #363F5F;
    --text:         #969CB2;
    --shape:        #FFFFFF;
    --background:   #e5e5e5;
  }
  * {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background) ;
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, textarea, button {
    font-weight: 400;
  }
  h5, h6, strong {
    font-weight: 500;
  }
  h3, h4 {
    font-weight: 600;
  }
  h1, h2 {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
