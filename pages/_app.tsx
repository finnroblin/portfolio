import { ChakraProvider } from '@chakra-ui/react'
import { Router } from 'next/router'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
interface WebsiteProps {
  Component: any
  pageProps: any
  router: Router
}

const Website = (props: WebsiteProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={props.router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <props.Component {...props.pageProps} key={props.router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
