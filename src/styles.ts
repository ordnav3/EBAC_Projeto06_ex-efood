import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#FFFFFF',
  floralWhite: '#FFF8F2',
  antiqueWhite: '#FFEBD9',
  salmon: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${cores.floralWhite};
  }

  .myContainer{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
