import Link from 'next/link'

import styled from '@emotion/styled'
import { useColorModeValue, Image, Text, Container } from '@chakra-ui/react'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px
display: inline-flex;
text-align: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(180deg);
    

}
`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Container textAlign={'center'}>
            <Image src={logoImg} width={8} height={8} alt="logo"
              display="inline-block"
              />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily="M PLUS Rounded 1c"
              fontWeight="bold"
              ml={3}
              display="inline-block"
            >
              Finn Roblin
            </Text>
          </Container>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
