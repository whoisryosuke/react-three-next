import useStore from "@/helpers/store"
import { Badge } from "@pmndrs/branding"
import Head from "next/head"
import styled from "styled-components"

const Container = styled.main({
  width: `100%`,
  height: `100%`,
  position: `absolute`,
  top: 0,
  right: 0,
  zIndex: 20,
})

const Title = styled.h1({
  position: `absolute`,
  textAlign: `center`,
  color: `#FAFAFA`,
  marginTop: `56px`,
})

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
    <Container className='dom' {...events}>
      <Header />
      {dom}
      <Title className='w-full text-xs tracking-wider sm:subpixel-antialiased md:antialiased'>
        REACT THREE NEXT STARTER
      </Title>
      <div style={{ position: `absolute`, bottom: `4px`, right: `4px`, zIndex: 30 }}>
        <Badge />
      </div>
    </Container>
  )
}

export default Dom
