// import Logo from './logo'
// import NextLink from 'next/link'
// import {
//   Container,
//   Box,
//   Link,
//   Stack,
//   Heading,
//   Flex,
//   Menu,
//   MenuItem,
//   MenuList,
//   MenuButton,
//   IconButton,
//   useColorModeValue
// } from '@chakra-ui/react'

// import { HamburgerIcon } from '@chakra-ui/icons'
// import ThemeToggleButton from './theme-toggle-button'

// interface LinkItemProps {
//   href: string
//   path: string
//   children: React.ReactNode
// }

// const LinkItem = (props: LinkItemProps) => {
//   const active = props.path === props.href
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//   return (
//     <NextLink href={props.href}>
//       <Link
//         p={2}
//         bg={active ? 'glassTeal' : undefined}
//         color={active ? '#202023' : inactiveColor}
//       >
//         {props.children}
//       </Link>
//     </NextLink>
//   )
// }

// const Navbar = (props: any) => {
//   const { path } = props

//   return (
//     <Box
//       position="fixed"
//       as="nav"
//       w="100%"
//       bg={useColorModeValue('#ffffff40', '#20202380')}
//       style={{ backdropFilter: 'blur10px' }}
//       zIndex={1}
//       alignItems="center"
//       alignSelf={"center"}
//       {...props}
//     >
//       <Container
//         display="flex"
//         p={2}
//         maxW="container.lg.md"

//         flexWrap="wrap"
//         alignItems="center"
//         text-justify="space-between"
//       >
//         <Box>
//         <Flex alignItems={"center"} mr={5} display="block">
//           <Heading as="h1" size="lg" letterSpacing={'tighter'}>
//             <Logo />
//           </Heading>
//         </Flex>

        // <Stack
        //   direction={{ base: 'column', md: 'row' }}
        //   display={{ base: 'none', md: 'flex' }}
        //   width={{ base: 'full', md: 'auto' }}
        //   alignItems="center"
        //   flexGrow={1}
        //   mt={{ base: 4, nmd: 0 }}
        // >
        //   <LinkItem href="/works" path={path}>
        //     Projects
        //   </LinkItem>
        //   <LinkItem href="/posts" path={path}>
        //     Posts
        //   </LinkItem>
        // </Stack>
//         </Box>
//         <Box flex={1} alignItems="right">
//           <ThemeToggleButton />
//           <Box ml={2} display={{ base: 'inline-block',
//         md: 'none'
//           }}>
//             <Menu>
//               <MenuButton
//                 as={IconButton}
//                 icon={<HamburgerIcon />}
//                 variant="outline"
//                 aria-label="Options"
//               />

//               <MenuList>
//                 <NextLink href="/" passHref={true}>
//                   <MenuItem as={Link}>About</MenuItem>
//                 </NextLink>
//                 <NextLink href="/works" passHref={true}>
//                   <MenuItem as={Link}>Projects</MenuItem>
//                 </NextLink>
//                 <NextLink href="/posts" passHref={true}>
//                   <MenuItem as={Link}>Posts</MenuItem>
//                 </NextLink>
//               </MenuList>
//             </Menu>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }
// export default Navbar

import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

interface LinkItemProps {
  href: string
  path: string
  children: React.ReactNode
}

const LinkItem = (props: LinkItemProps) => {
  const active = props.path === props.href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={props.href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {props.children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flex-wrap="wrap"
        alignItems="center"
        justify-content="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/bookshelf" path={path}>
          Bookshelf
          </LinkItem>
        </Stack>
        {/* <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          
        </Stack> */}

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/bookshelf" passHref>
                  <MenuItem as={Link}>Bookshelf</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
