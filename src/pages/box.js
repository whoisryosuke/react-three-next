import useStore from "@/helpers/store"
import dynamic from "next/dynamic"
import BackButton from "@/components/dom/back"

const Plane = dynamic(() => import(`@/components/canvas/Plane`), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: `Box` })
  return (
    <>
      <Plane r3f />
      <BackButton />
    </>
  )
}

export default Page
