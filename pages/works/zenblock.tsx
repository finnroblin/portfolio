import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/project";

import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
const Work = () => {
    return (
        <Layout title="Zenblock">
            <Container>
                <Title>
                    Zenblock <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A timeblocking app to help people spend their time more efficiently.
                </Paragraph><List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/zenblock'>
                        zenblock <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React.js, Postgres, Redis, Typescript</span>
                    </ListItem>
                    <ListItem>
                        Blogpost
                    </ListItem>
                </List>
                {/* <WorkImage src="/images/zenblock1" alt="zenblock1"/>
                <WorkImage src="/images/zenblock2" alt="zenblock2"/> */}

            </Container>
        </Layout>
    )
}
export default Work;