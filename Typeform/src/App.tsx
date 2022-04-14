import React from 'react'

import { Main, Section, Sticky } from './styles'
//importações que serão utilizadas
import GlobalStyles from './styles/global'
import Header from './components/Header'
import FirstAndSecond from './components/FirstAndSecond'
import Footer from './components/Footer'

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles /> // variavel que vai conter os nossos CSS

      //main vai conter todos os containers animados da nossa página
      <Main style={{ height: '1610vh' }}>// 1610vh será a o tamanho da nossa página
        <Header />

        <Section style={{ height: '72.7%' }}>//Primeira e segunda section animada 
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}> // Terceira section animada
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}> // Quarta section animada
          <Sticky className="fourth" />
        </Section>

        <Footer />
      </Main>
    </>
  )
}

export default App
