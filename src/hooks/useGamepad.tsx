import { joymap } from "@/helpers/joymap"
import React, { useCallback, useEffect, useState } from "react"

const useGamepad = (): void => {
  const [, updateState] = useState({})
  const forceUpdate = useCallback(() => updateState({}), [])
  useEffect(() => {
    if (process.browser) {
      joymap.setOnPoll(forceUpdate)
      joymap.start()
    }
    return () => {
      if (process.browser) {
        joymap.stop()
      }
    }
  }, [])
}

export default useGamepad
