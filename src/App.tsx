import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function trocaTema() {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
