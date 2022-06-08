import {
  useColorModeValue,
  Text,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Modal,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalOverlay,
  HStack,
  
  ModalFooter
} from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'
import { produce } from 'immer'

enum _LifeState {
  _Dead = 0,
  _Alive = 1
}

const directions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1]
]
const GameOfLife = ({
  numRows = 50,
  numCols = 50
}: {
  numRows?: number
  numCols?: number
}) => {
  // const {currentArr, setCurrentArr} = useState();
  const [grid, setGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < numRows; i += 1) {
      const col = Array.from(Array(numCols), () => _LifeState._Dead)
      rows.push(col)
    }
    return rows
  })
  const [running, setRunning] = useState(false)

  const runningRef = useRef(running)
  runningRef.current = running
  const runSimulation = useCallback(() => {
    // base/kill condition, Ref is always accessible to this fn
    if (!runningRef.current) {
      return
    }
    // simulate

    setGrid(currGrid => {
      return produce(currGrid, gridCopy => {
        for (let i = 0; i < numRows; i += 1) {
          for (let j = 0; j < numCols; j += 1) {
            let neighbors = 0
            directions.forEach(([x, y]) => {
              const newX = i + x
              const newY = j + y
              if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
                neighbors += currGrid[newX][newY]
              }
            })
            // direction checks
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = _LifeState._Dead
            } else if (currGrid[i][j] === _LifeState._Dead && neighbors === 3) {
              gridCopy[i][j] = _LifeState._Alive
            }
          }
        }
      })
    })

    setTimeout(runSimulation, 1000)
  }, []) // fn only created once due to empty array
  // console.log(grid)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Overlay = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  )

  const border =useColorModeValue('solid 1px black', 'solid 1px white');
  return (
    <>
      <HStack spacing={'20%'}>
        <Box>
          <Text>Conway&apos;s Game Of Life</Text>
        </Box>
        <HStack>
          <Button
            onClick={() => {
              setRunning(!running)
              if (!running) {
                runningRef.current = true
                runSimulation()
              }
            }}
          >
            {running ? 'Stop Simulation' : 'Start Simulation'}
          </Button>
          <Box alignSelf={'right'}>
            <Button
              alignSelf={'right'}
              alignContent={'right'}
              justifySelf={'right'}
              justifyContent={'right'}
              justifyItems={'right'}
              onClick={onOpen}
            >
              About
            </Button>
          </Box>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <Overlay />
            <ModalContent>
              <ModalBody>
                Conway&apos;s Game of Life is a cellular automaton. Click on each
                square to toggle its state between alive and dead, and press
                &quot;Start Simulation&quot; to start the game. Each cell will live or die depending on its neighbors.
              </ModalBody>
              <ModalFooter>
                  <Container>
                
                
                <Button alignSelf={"left"} colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                
                </Container>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </HStack>

      <Box>
        {/* <Stack direction={'vertical'}> */}
        <Grid
          fill={'azure'}
          templateColumns={`repeat(${numCols}, 20px)`}
          // templateColumns="repeat(50, 20px)"
        >
          {grid.map((rows, i) =>
            rows.map((col, j) => (
              <GridItem key={`(${i}, ${j})`}
                width={5}
                height={5}
                backgroundColor={grid[i][j] ? 'red' : undefined}
                border={border}
                onClick={() => {
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][j] =
                      grid[i][j] === _LifeState._Alive
                        ? _LifeState._Dead
                        : _LifeState._Alive
                  })

                  setGrid(newGrid)
                }}
              ></GridItem>
            ))
          )}
        </Grid>

        {/* </Stack> */}
      </Box>
      
    </>
  )
}

export default GameOfLife
