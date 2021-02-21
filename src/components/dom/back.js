import Link from "next/link"

const BackButton = () => {
  return (
    <Link href='/' as={`/`}>
      <button style={{ position: `absolute`, zIndex: 20, margin: `8px`, color: `#FAFAFA` }}>Previous page</button>
    </Link>
  )
}

export default BackButton
