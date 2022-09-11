import Head from 'next/head'
import React from 'react'
import { Router } from 'next/router'
import { Box, Container, VStack } from '@chakra-ui/react'
import Navbar from '../navbar'

interface MainProps {
  children: React.ReactNode
  router: Router
}

const Main = (props: MainProps) => {
  return (
    <Box as="main" pb={8} aria-orientation="vertical">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Finn Roblin - Homepage</title>
      </Head>
      <VStack 
      spacing={20}
      >
        <Navbar path={props.router.asPath} />

        <Box>
          <Container maxW="container.md" pt={14}>
            {props.children}
          </Container>
        </Box>
      </VStack>
    </Box>
  )
}

export default Main
