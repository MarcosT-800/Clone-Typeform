import React from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

import { Sticky } from '../../styles'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll() 

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]) //dizendo quando a opacidade do quadro vai aparecer e desaparecer
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8]) //dizendo que o quadro começa pequena e vai ficando grande

  return (
    <Sticky className="second">
      <First /> // chamando o first

      // parte da animação da Div
      <motion.div 
        style={{
          position: 'absolute', //para que a div tenha um espaço só pra ela
          top: 0,
          left: 0,
          right: 0,
          height: '100vh', //altura do quadro
          borderRadius: '4px',
          border: '4px solid #fff', //cor branca ao redor do quadro
          opacity: frameOpacity, //Opacidade do quadro
          scale: frameScale // Escala do quadro
        }}
      />
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const firstRadius = useTransform( //dizendo quando o quadro deve se transformar
    scrollYProgress, //falando que a animação será quando você escrolar
    [0.198, 0.264, 0.558, 0.627], //tamanho da pagina
    [0, 4, 4, 0] // tamanho que o quadro terá de acordo com o tamanho da pagína passado acíma
  )
  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )
  //animando o lado esquerdo
  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh']
  )
  //animando a imagem ou a div do lado ddireito daqui pra baixo
  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093], // tamanho da pagina INPUT
    [0, 0.511] // Tamanho que a div vai ficar de acordo com o tamanho da página OUTPUT
  )
  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh']
  )
  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )

  return (
    <Sticky
      className="first"
      style={{
        borderRadius: firstRadius,
        scale: firstScale
      }}
    >
      <motion.div
        className="offset"
        style={{
          y: offsetY
        }}
      >
        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight
            }}
          />
          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale
              }}
            />
          </div>
        </div>

        <div className="b" />
        <div className="c" />
      </motion.div>
    </Sticky>
  )
}

export default FirstAndSecond
