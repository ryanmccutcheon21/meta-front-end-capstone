import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import image from '../images/hero.png'

const Hero = () => {
    return (
        <Box bg='brand.primary1' display='flex' justifyContent='space-evenly' p={5}>
            <VStack spacing={4} m='auto' w={200}>
                <Text color='brand.primary2' fontWeight='extrabold' fontSize={64} style={{ whiteSpace: 'nowrap' }}>Little Lemon</Text>
                <Text
                    color='brand.highlight1'
                    fontWeight='bold'
                    fontSize={40}
                    textAlign="left"
                >
                    Chicago
                </Text>
                <Text color='brand.highlight1'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                <Button bg='brand.primary2' p={2} borderRadius={16} fontWeight='bold'>Reserve a Table</Button>
            </VStack>
            <img src={image} alt='Little Lemon dish' />
        </Box>
    )
}

export default Hero
