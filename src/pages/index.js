import useStore from "@/helpers/store"
import dynamic from "next/dynamic"
import Go from "@/components/dom/go"

const Text = dynamic(() => import(`@/components/canvas/Text`), {
  ssr: false,
})
const GamepadTest = dynamic(() => import(`@/components/dom/GamepadTest`), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: `Text` })
  return (
    <>
      <Text r3f />
      <Go />

      <GamepadTest />
    </>
  )
}

export default Page
