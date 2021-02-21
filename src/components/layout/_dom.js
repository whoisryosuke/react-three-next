import useStore from "@/helpers/store"
import { Badge } from "@pmndrs/branding"
import Head from "next/head"

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
    <div style={{ position: `absolute`, top: 0, right: 0, zIndex: 20 }} className='dom' {...events}>
      <Header />
      {dom}
      <h1
        style={{ position: `absolute`, textAlign: `center`, color: `#FAFAFA`, marginTop: `56px` }}
        className='w-full text-xs tracking-wider sm:subpixel-antialiased md:antialiased'
      >
        REACT THREE NEXT STARTER
      </h1>
      <div style={{ position: `absolute`, bottom: `4px`, right: `4px`, zIndex: 30 }}>
        <Badge />
      </div>
    </div>
  )
}

export default Dom
