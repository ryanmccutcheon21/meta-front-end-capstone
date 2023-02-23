import React from 'react';
import { Box, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';

const About = () => {
    const direction = useBreakpointValue({ base: 'column', lg: 'row' });

    return (
        <Flex py={20} justifyContent="center" alignItems="center" p={10} bg='brand.highlight1' mt={-5}>
            <Box
                textAlign={direction === 'column' ? 'center' : 'left'}
                mr={10}
                width={{ base: '100%', lg: '50%' }}
                order={{ base: 2, lg: 1 }}
            >
                <Heading as="h2" mb={4} fontSize={{ base: '4xl', lg: '5xl' }}>
                    Little Lemon
                </Heading>
                <Text>Chicago</Text>
                <Text fontSize={{ base: 'xl', lg: '2xl' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo felis a elementum
                    tempor. Integer ac metus posuere, consequat dui eu, ultrices urna. Pellentesque ut lacus
                    at ex bibendum congue. Nulla id velit ac ex sagittis mollis. Nulla facilisi.
                </Text>
            </Box>
            <Flex
                direction="column"
                justifyContent="flex-end"
                alignItems={direction === 'column' ? 'center' : 'flex-end'}
                width={{ base: '100%', lg: '50%' }}
                order={{ base: 1, lg: 2 }}
            >
                <Box position="relative">
                    <Image
                        src="https://source.unsplash.com/random/800x800?portrait"
                        alt="Image 1"
                        mb={2}
                        boxShadow="xl"
                        borderRadius={10}
                        width="50%"
                    />
                    <Box position="absolute" bottom="0" left="0" zIndex="-1">
                        <Image
                            src="https://source.unsplash.com/random/800x800?portrait"
                            alt="Image 2"
                            boxShadow="xl"
                            borderRadius={10}
                            width="50%"
                            transform="translate(25%, -25%)"
                        />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default About;

