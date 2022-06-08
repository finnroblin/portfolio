import {
  Container,
  Heading,
  Link,
  List,
  ListItem
  
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Posts (to do: add hover preview for posts)
      </Heading>
      <Section delay={'0.1'}>
        <List spacing={"2"}>
          <ListItem key="deploying-to-aws">
            <NextLink href="/posts/deploying-to-aws">
              <Link>
                Deploying a Node, React, Postgres, and Redis Stack to AWS in
                2022
              </Link>
            </NextLink>
          </ListItem>
          {/* <ListItem key="freshman-summer-intern">
            <NextLink href="/posts/freshman-summer-intern">
              <Link>
                How I'm Planning to Spend the Summer After Freshman Year
              </Link>
            </NextLink>
          </ListItem> */}
          <ListItem key="first-year-in-review">
            <NextLink href="/posts/first-year-in-review">
              <Link>
                My first year at UMich in review
              </Link>
            </NextLink>
          </ListItem>
        </List>
        
      </Section>
    </Container>
  </Layout>
)

export default Posts
