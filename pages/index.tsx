import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import GameOfLife from '../components/game-of-life'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogOut,
  IoEggOutline,
  IoGitMerge,
  IoEggSharp
} from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <GameOfLife numRows={10} numCols={30}/>
        <Box
        // mt={3}
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
          p={3}
          textAlign={'center'}
          mb={2}
        >
          Hello! I study CS and develop apps on the side
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Finn Roblin
            </Heading>
            <p> CS @ UMich | Building {' '}
            <NextLink href="/works/zenblock">
              <Link> Zenblock </Link>
            </NextLink>
                 | Incoming SDE Intern @ Amazon </p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            alignItems={'center'}
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/headshot.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={'0.1'}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm a motivated computer science student at the University of
            Michigan with an interest in building tools and products to help us
            live better, happier lives. This summer I'm building out{' '}
            <NextLink href="/works/zenblock">
              <Link> Zenblock</Link>
            </NextLink>
            , a productivity tool to help everyone save hours in their workday
            through intuitive, guided time blocking. Come fall, I'll be working
            as a SDE Intern at Amazon. I love talking with new people, email me
            to get in touch!
          </Paragraph>
          <Box textAlign={'center'} mt={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={'0.2'}>
          <Heading as="h3" variant="section-title">
            Interests, Skills, Dreams
          </Heading>
          <BioSection>
            <BioYear>Technologies</BioYear>
            Full stack web dev (Node, React, Django)
          </BioSection>
          <BioSection>
            <BioYear>Interests</BioYear>
            Swimming, Biking, Running. Coffee. Building things. 
          </BioSection>
          <BioSection>
            <BioYear>Dreams</BioYear>
          </BioSection>
          <UnorderedList>
            <ListItem>
              Unleash full human potential by augmenting our capabilities
              through technology
            </ListItem>
            <ListItem>
              Develop to help us live harmoniously with one another and nature
            </ListItem>
          </UnorderedList>

        </Section>
        <Section delay={'0.3'}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/finnroblin" target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @finnroblin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/finn-roblin"
                target={'_blank'}
              >
                <Button
                  variant={'ghost'}
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @finn_roblin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:finn.s.roblin@gmail.com" target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme="teal"
                  leftIcon={<Icon as={IoEggSharp} />}
                >
                  my email
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/files/resume.pdf" target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme="teal"
                  leftIcon={<Icon as={IoEggSharp} />}
                >
                  my resume
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
