import useStore from "@/helpers/store"
import { Badge } from "@pmndrs/branding"
import Head from "next/head"
import { StyleSheet, css } from "aphrodite"

const Header = () => {
  const title = useStore((s) => s.title)
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
const Dom = ({ dom }) => {
  const events = useStore((s) => s.events)
  return (
    <div className={`${css(styles.container)} dom`} {...events}>
      <Header />
      {dom}
      <h1
        className={css(styles.h1)}
        // className='w-full text-xs tracking-wider sm:subpixel-antialiased md:antialiased'
      >
        REACT THREE NEXT STARTER
      </h1>
      <div style={{ position: `absolute`, bottom: `4px`, right: `4px`, zIndex: 30 }}>
        <Badge />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    height: `100%`,
    position: `absolute`,
    top: 0,
    right: 0,
    zIndex: 20,
  },
  h1: {
    width: `100%`,
    fontFamily: `Raleway, Helvetica, Arial, sans-serif`,
    fontSize: 16,
    position: `absolute`,
    textAlign: `center`,
    color: `#FAFAFA`,
    marginTop: `28px`,
  },
})

export default Dom
