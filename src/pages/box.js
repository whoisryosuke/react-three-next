import useStore from "@/helpers/store"
import dynamic from "next/dynamic"
import BackButton from "@/components/dom/back"
import { StyleSheet } from "aphrodite"

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== `undefined`) {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS)
}

const Box = dynamic(() => import(`@/components/canvas/Box`), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: `Box` })
  return (
    <>
      <Box r3f />
      <BackButton />
    </>
  )
}

export default Page
