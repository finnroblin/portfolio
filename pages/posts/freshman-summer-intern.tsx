import {Link, Heading } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, SubHeading } from "../../components/post";
import NextLink from "next/link"
import Paragraph from "../../components/paragraph";


const Article = () => {
    return (
        <Layout title="Freshman Summer No Internship">
    <Title> 
        How I'm Planning to Spend the Summer After Freshman Year
    </Title>
    <SubHeading>
        Without an internship, here's how I'm enhancing my developer skillset, 
        making money, and preparing for the next recruiting cycle
    </SubHeading>
    <Paragraph>
        After 150 applications, I don't have an internship for this summer.
        This situation isn't uncommon; most companies don't want first year interns. However, I feel the need to do something to push my comfort zone and skills.
        Here's a loose collection of my strategy this summer to grow my skills as a developer, make money, and set myself up well for internships next year.
    </Paragraph>

    <Paragraph>
        My thesis: Big N recruiting chances = P(Passing resume screen) * P(Passing Online Assesment) * P(Passing final whiteboard interviews)
        The recruiting pipeline for Big N companies is, broadly speaking:
        1. External application -> Resume screen
        2. If passed resume screen -> Sent coding challenge/online assessment
        3. If sufficient performance on online assessment -> 1-3 rounds of interviews
        4. Passed interviews -> Offer

    </Paragraph>
<Paragraph>
        
    </Paragraph>
    <Paragraph>
        1. Projects
    </Paragraph>
    <Paragraph>
        Side Projects are a great way to demonstrate interest in developing software.
        I was able to land interviews with Amazon and Walmart Global Tech without any 
        experience, largely because of my projects.
        ATS Resume Scanners are the first hurdle to clear into a company's recruiting pipeline.
        They work by scanning your resume for key words and phrases, assessing your "fit" 
        with the role. My thesis is that these automated systems can be beaten by putting
        projects on your resume, especially if they use a modern tech stack. 
        This summer I'm building out Zenblock, a productivity webapp that uses a Node, React,
        Postgres, and Redis stack. I may also start another side project that is more technically demanding.
        I'm thinking something along the lines of a betting/trading algorithm.
    </Paragraph>
    <Paragraph>
        2. Working
    </Paragraph>
    <Paragraph>
        I was a barista last summer at a coffee shop and I'm trying to continue that this summer.
        While the job isn't technically demanding, it's a way to earn regular income.
        Doing something physical that's away from the computer screen also has its benefits. 
        Finally, I've found that my communication skills benefit from a customer-facing role.
    </Paragraph>
    <Paragraph>
        3. Interview Prep
    </Paragraph>
    <Paragraph>
        The projects and work experience will help me pass the resume screen, but I still need to be able to pass
        online coding assessments and technical interviews.
        So, I'll spend a few hours a week practicing leetcode-style questions from the Grind 75 list and Neetcode.io.
        I'm also planning to try for some trading internships, which require probability knowledge. I'm going to skim
        through Sheldon Ross' textbook a First Course in Probability and practice brainteasers from sites like Glassdoor.
        I'll update this post as I find more resources for trading internship prep.
        Finally, I'm working through Understanding Distributed Systems, and then I'll move onto Designing Data-Intensive Applications.
        These books will introduce me to System Design and I'll apply their arguments to my projects.
        I'm investing a significant chunk of time into these over the summer, since I'll be working at Amazon as a SDE Intern in the fall, so I'll
        have much less time.
    </Paragraph>
        </Layout>
    )
}

export default Article;