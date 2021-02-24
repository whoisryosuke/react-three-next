import { Suspense } from "react"
import { Environment, MeshDistortMaterial } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"
import { extend } from "react-three-fiber"
import useStore from "@/helpers/store"
import useGamepad from "@/hooks/useGamepad"
import { players } from "@/helpers/joymap"

const M = a(MeshDistortMaterial)
// extend({ sphereBufferGeometry })

const BoxComponent = () => {
  const router = useStore((s) => s.router)
  const { position } = useSpring({
    position: players[0].module.getButton(`start`).pressed ? 10 : 0,
  })
  useGamepad()
  console.log(position)
  //players[0].module.getButton(`start`).pressed
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <mesh position={[players[0].module.getButton(`start`).pressed ? 1 : 0, 0, 0]} rotation={[45, 45, 45]}>
        <planeBufferGeometry args={[5, 5, 1]} />
        {/* <M factor={3} color={`red`} /> */}
      </mesh>
      <Environment preset={`studio`} />
    </Suspense>
  )
}
export default BoxComponent
