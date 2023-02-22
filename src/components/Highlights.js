import React from 'react'
import greekSalad from '../images/greek-salad.png'
import bruchetta from '../images/bruchetta.png'
import lemonDessert from '../images/lemon-dessert.png'
import { Box, Button, Flex, Grid, HStack, Text, VStack } from '@chakra-ui/react'

const data = [
    {
        id: 'card1',
        title: 'Greek Salad',
        price: '$12.99',
        description: 'Lorem ipsum dolore et adium. Lorem ipsum. Lorem ipsum. Lorem ipsoum.',
        deliveryPrice: '$1',
        image: greekSalad
    },
    {
        id: 'card2',
        title: 'Bruchetta',
        price: '$12.99',
        description: 'Lorem ipsum dolore et adium. Lorem ipsum. Lorem ipsum. Lorem ipsoum.',
        deliveryPrice: '$1',
        image: bruchetta
    },
    {
        id: 'card3',
        title: 'Lemon Dessert',
        price: '$12.99',
        description: 'Lorem ipsum dolore et adium. Lorem ipsum. Lorem ipsum. Lorem ipsoum.',
        deliveryPrice: '$1',
        image: lemonDessert
    }
]

const Highlights = () => {
    return (
        <Box mb={5}>
            <Flex justifyContent='space-between' mx={5}>
                <Text fontWeight='bold' fontSize={44}>This week's specials!</Text>
                <Button bg='brand.primary2' borderRadius={16} px={2} mt={3} fontWeight='bold'>Online Menu</Button>
            </Flex>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} m={5}>
                {data.map(item => (
                    <VStack key={item.id} border='1px' p={2}>
                        <img src={item.image} />
                        <HStack>
                            <Text>{item.title}</Text>
                            <Text color='red.600'>{item.price}</Text>
                        </HStack>
                        <Text>{item.description}</Text>
                        {item.deliveryPrice &&
                            <HStack>
                                <Text>Order a delivery</Text>
                                <Text>{item.deliveryPrice}</Text>
                            </HStack>
                        }
                    </VStack>
                ))}
            </Grid>
        </Box>
    )
}

export default Highlights

