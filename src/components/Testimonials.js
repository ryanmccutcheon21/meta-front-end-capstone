import { Box, Flex, HStack, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

const arr = [
    {
        id: 1,
        rating: 5,
        user: {
            name: 'John Doe',
            image: 'https://source.unsplash.com/random/800x800?portrait'
        },
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nibh quis ligula interdum sollicitudin.'
    },
    {
        id: 2,
        rating: 4,
        user: {
            name: 'Jane Doe',
            image: 'https://source.unsplash.com/random/800x800?portrait'
        },
        review: 'Sed euismod massa id nulla luctus, vel volutpat ex finibus. Nam vel nisl fermentum, faucibus velit ac, vestibulum metus.'
    },
    {
        id: 3,
        rating: 3,
        user: {
            name: 'Bob Smith',
            image: 'https://source.unsplash.com/random/800x800?portrait'
        },
        review: 'Cras vehicula ex a odio efficitur, sed faucibus urna fringilla. Suspendisse non augue vitae libero euismod tempus.'
    },
    {
        id: 4,
        rating: 2,
        user: {
            name: 'Sara Johnson',
            image: 'https://source.unsplash.com/random/800x800?portrait'
        },
        review: 'Maecenas pharetra orci in velit dignissim imperdiet. Fusce dignissim, sapien non dapibus vestibulum, mi ex vehicula sem, eget elementum tellus tellus et massa.'
    }
]

const Testimonials = () => {
    const direction = useBreakpointValue({ base: 'column', lg: 'row' })

    return (
        <Box bg='brand.primary1'>
            <Text fontWeight='extrabold' fontSize={44} color='brand.highlight1' pt={5}>Testimonials</Text>
            <Stack spacing={8} mb={5} direction={direction} p={10}>
                {arr.map(item => (
                    <Box key={item.id} border='1px solid #F4CE14' borderRadius={16} p={5}>
                        <Text fontSize='lg' fontWeight='bold'>{item.user.name}</Text>
                        <Flex alignItems='center' mt={2} justifyContent='space-evenly'>
                            <Image src={item.user.image} alt={item.user.name} borderRadius='full' boxSize={12} />
                            <HStack>
                                {[...Array(item.rating)].map((_, i) => (
                                    <Image key={i} src='https://img.icons8.com/color/48/000000/filled-star--v1.png' alt='star' boxSize={4} ml={3} />
                                ))}
                            </HStack>
                        </Flex>
                        <Text mt={2}>{item.review}</Text>
                    </Box>
                ))
                }
            </Stack >
        </Box>
    )
}

export default Testimonials
