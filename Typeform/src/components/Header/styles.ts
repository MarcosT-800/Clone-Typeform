import styled from 'styled-components'
import { motion } from 'framer-motion'

//passando os estilos do header
export const Container = styled(motion.header)` 
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.1); //torna ele um pouco escuro

  position: fixed; //ficará fixado
  top: 0; // fixado no topo
  z-index: 9999; //deixa ele por cima das coisas
`
