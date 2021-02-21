import React, { Suspense } from "react"
import { Environment, MeshDistortMaterial, Text } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"
import useStore from "@/helpers/store"
import { DoubleSide } from "three"

const M = a(MeshDistortMaterial)

const SphereComponent = () => {
  const router = useStore((s) => s.router)
  const { color } = useSpring({
    color: router.route === `/box` ? `#272727` : `black`,
  })
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />

      <Text
        // ref={ref}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={`left`}
        font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
        anchorX='center'
        anchorY='middle'
      >
        <meshStandardMaterial
          attach='material'
          side={DoubleSide}
          // color={'#EC2D2D'}
          // transparent
          opacity={1}
          roughness={0}
          metalness={1}
        />
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
      <Environment preset={`studio`} />
    </Suspense>
  )
}

export default SphereComponent
