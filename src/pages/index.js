import useStore from "@/helpers/store"
import dynamic from "next/dynamic"
import Go from "@/components/dom/go"
import { StyleSheet } from "aphrodite"

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== `undefined`) {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS)
}

const Text = dynamic(() => import(`@/components/canvas/Text`), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: `Text` })
  return (
    <>
      <Text r3f />
      <Go />
    </>
  )
}

export default Page
