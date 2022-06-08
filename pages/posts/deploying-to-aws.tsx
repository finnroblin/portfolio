import {Link } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, SubHeading } from "../../components/post";
import NextLink from "next/link"


const Article = () => {
    return (
        <Layout title="Deploying to AWS">
    <Title> 
        Deploying a Node, React, Postgres, and Redis Stack to AWS in 2022
    </Title>
    <SubHeading>
        Deploy using Elastic Beanstalk, RDS, ElastiCache, and
        Amplify
    </SubHeading>
    <SubHeading>
        An update to Tiago Santos&apos;s 2020 {``}
        <NextLink href="https://medium.com/swlh/deploy-https-node-postgres-redis-react-to-aws-ef252567200d"
        >
            <Link> Medium article </Link>
        </NextLink>
        that describes the same stack
    </SubHeading>
        </Layout>
    )
}

export default Article;