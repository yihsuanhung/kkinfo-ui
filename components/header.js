import styled from 'styled-components'
import Link from 'next/link'

const StyledHeader = styled.nav`
  background-color: black;
  text-align: center;
`

const StyledALink = styled.a`
  color: white;
`

export default function Header(props) {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <StyledALink>page1</StyledALink>
      </Link>
      <Link href="/" passHref>
        <StyledALink>page2</StyledALink>
      </Link>
    </StyledHeader>
  )
}
