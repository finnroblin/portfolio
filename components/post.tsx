
import { Image, Box, Heading, Badge } from '@chakra-ui/react'


export const Title = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[] | undefined
}) => (
  <Box>
    <Heading display="inline-block" as="h1" mb={4}>
      {children}
    </Heading>
  </Box>
)

export const SubHeading = ({
    children
}: {
  children: React.ReactNode | React.ReactNode[] | undefined
}) => (
  <Box>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[] | undefined
}) => (
  <Badge colorScheme={'green'} mr={2}>
    {children}
  </Badge>
)
