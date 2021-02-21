import Link from "next/link"

const Go = () => {
  return (
    <Link href='/box' as={`/box`}>
      <button style={{ position: `absolute`, zIndex: 20, padding: `8px`, margin: `8px`, color: `#FAFAFA` }}>
        Next page
      </button>
    </Link>
  )
}

export default Go
