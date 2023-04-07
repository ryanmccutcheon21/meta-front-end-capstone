import { Link } from 'react-router-dom';
import { Box, Button, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
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
                {/* <ChakraLink as='Link' to='/reservations' bg='brand.primary2' p={2} borderRadius={16} fontWeight='bold'>Reserve a Table</ChakraLink> */}
                <ChakraLink as={Link} to='/reservations' bg='brand.primary2' p={2} borderRadius={16} fontWeight='bold' _hover={{backgroundColor: 'brand.secondary1'}}>
                      Reserve a Table
                </ChakraLink>
            </VStack>
            <img src={image} alt='Little Lemon dish' />
        </Box>
    )
}

export default Hero
