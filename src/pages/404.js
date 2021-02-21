import React from "react"
import { StyleSheet, css } from "aphrodite"

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== `undefined`) {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS)
}

// custom pages/404.js !! Do not remove please or it will break build
export default function Error() {
  return <h1 className={css(styles.text)}>404 - Page Not Found</h1>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontWeight: `bold`,
    textAlign: `center`,
  },
})
