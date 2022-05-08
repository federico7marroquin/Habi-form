import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
        :root {
                font-size: 62.5%;
                box-sizing: border-box;
        }

        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                padding: 0;
                list-style: none;
        }
        
        button {
                background: transparent;
                border: 0;
                outline: 0;
        }
        
        body {
                background: #fff;
                height: 100vh;
                margin: 0 auto;
                max-width: 800px;
                overscroll-behavior: none;
                width: 100%;
                font-family: 'Open Sans', sans-serif;

        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
  }
`
