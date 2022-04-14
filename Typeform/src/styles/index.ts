//aqui vai ficar as estilizações padrões do nosso site
import styled from 'styled-components' // importando o style de style components
import { motion } from 'framer-motion'  // importando também o motion de dentro do frame motion

//exportando o main que usaremos entro do App.tsx
export const Main = styled.main` 
  .first {  {/**/}
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7dbb91;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      width: 100%;
      height: 100%;
      background: #582534;
    }
    .c {
      width: 100%;
      height: 100%;
      background: #0a7397;
    }
  }
  .second {
    background: green;
  }
  .third {
    background: yellow;
  }
  .fourth {
    background: blue;
  }
`

//Estilizando as Sections da página
export const Section = styled.div` 
  position: relative;
`

//Estilizando os Stickt da página
export const Sticky = styled(motion.div)`
  height: 100vh; {/*Irá ocupar 100% da altura da tela*/}
  position: sticky; 
  top: 0; {/*irá ficar fixado no topo*/}
  left: 0;  {/*irá ficar fixado no lado esquerdo*/}
  right: 0;  {/*irá ficar fixado no lado direito*/}
`
