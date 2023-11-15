import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --shape: #202024;
    --second-shape: #29292E;
    --third-shape: #323238;

    --placeholder: #7C7C8A;
    --base-text: #C4C4CC;
    --titles: #E1E1E6;
    --white: #FFFFFF;

    --green-dark: #015F43;
    --green: #00875F;
    --green-light: #00B37E;

    --red-dark: #AA2834;
    --red: #F75A68;
  }

  * {
    margin: 0;
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
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`