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
  // UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
// import GameOfLife from '../components/game-of-life'

import { IoLogoGithub, IoLogoLinkedin, IoEggSharp } from 'react-icons/io5'
// import Callout from '../components/callout'
const Page = () => {
  return (
    <Layout>
      
      
      <Container
      mt={2}
      >
        {/* <Callout /> */}
        <Box 
        display={{ md: 'flex' }}
        marginTop={6}
        marginBottom={2}
        >

          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Finn Roblin
            </Heading>
            <p>
              {' '}
              CS @ UMich | SDE Intern @ AWS | EECS 281 IA 
            </p>
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
            I&apos;m a motivated computer science student at the University of
            Michigan with an interest in building tools and products to help us
            live better, happier lives. Right now I am an intern at AWS on Opensearch Ingestion, a data streaming platform. 
            During the school year I am a teaching assistant (IA) for EECS 281, 
            UMich&apos;s Data Structures & Algorithms course. &nbsp; 
            
            <NextLink href="/works/zenblock">
              <Link
                colorScheme={useColorModeValue('blue','purple')}
              >Zenblock</Link>
            </NextLink>
            , a productivity tool to help everyone save hours in their workday
            through intuitive timeboxing, is my most active side project.
            I love talking with new people,
            please do reach out!
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
            Interests and Skills
          </Heading>
          <BioSection>
            <BioYear>Technologies</BioYear>
            Full stack web dev (Node, React, Django)
          </BioSection>
          <BioSection>
            <BioYear>Interests</BioYear>
            Triathlon! Working on the swim. Coffee and building things.
          </BioSection>
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
