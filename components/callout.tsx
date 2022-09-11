import { Text, Box, Button, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const numberOfRotationSlices = 10
const rotateArray = Array(numberOfRotationSlices + 1)
  .fill(0)
  .map((_, i) => i * (360 / numberOfRotationSlices)) // generate a 360 degree rotation in numberOfRotationSlices steps

const variants = {
  rotate: { rotate: rotateArray, transition: { duration: 0.75 } },
  start: { rotate: 0, transition: { duration: 0.5 } },
  stop: { rotate: 360, transition: { duration: 0.5 } }
}


interface CalloutProps {}

const Callout = (_props: CalloutProps) => {
  const [isStart, setIsStart] = useState(true);
  const [shouldSpin, setShouldSpin] = useState(false);

  const linkColor = useColorModeValue('blue', 'purple');
  // const linkColor = useColorModeValue('#ffffff40', '#20202380');

  return (
    <AnimatePresence>
      <motion.div
        // animate={{ rotate: [0, 90, 90, 90, 90, 0] }}
        variants={variants}
        animate={isStart? 'start' : (shouldSpin ? 'rotate' : 'stop')}
        // animate={shouldSpin ? 'rotate' : }
        // animate={{ rotate: rotateArray, transition: { duration: 0.75 } }}
      >
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
          p={3}
          textAlign={'center'}
          marginTop={2}
        >
          <Text>
            Hi, I&apos;m Finn! This portfolio website is where I practice my writing
            and (sometimes&nbsp;
            {/* <Link
          onClick={() => {
            setShouldSpin(true)
            setTimeout(function () {
              setShouldSpin(false)
            }, 1500)
          >
          wacky</Link> */}
            <Button
              colorScheme={linkColor}
              // bg={linkColor}
              size="md"
              // background={"none"}
              // textDecoration={"underline"}
              variant={'link'}
              // marginBottom={0.01}
              // marginRight={0.01}
              // marginLeft={0.01}
              // marginTop={0.01}
              onClick={() => {
                if (isStart) {
                  setIsStart(false);
                }
                setShouldSpin(true)
                setTimeout(function () {
                  setShouldSpin(false)
                }, 1500)
              }}
            >
              
              wacky
            </Button>
            ) frontend.
          </Text>
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default Callout
