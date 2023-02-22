import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Link as ChakraLink,
    Spacer,
    useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg='gray.100' py={3}>
            <Flex align='center' justify='space-between' maxW='900px' mx='auto'>
                <Flex align='center' ml={2}>
                    <Image src={logo} alt='Logo' maxH='50px' />
                </Flex>
                <Flex justify='flex-end' w='50%' display={{ base: 'none', md: 'flex' }}>
                    <ChakraLink as={Link} to='/login' color='black' fontWeight='bold' mx={2}>
                        Login
                    </ChakraLink>
                    <ChakraLink as={Link} to='/' color='black' fontWeight='bold' mx={2}>
                        Home
                    </ChakraLink>
                    <ChakraLink as={Link} to='/about' color='black' fontWeight='bold' mx={2}>
                        About
                    </ChakraLink>
                    <ChakraLink as={Link} to='/menu' color='black' fontWeight='bold' mx={2}>
                        Menu
                    </ChakraLink>
                    <ChakraLink as={Link} to='/reservations' color='black' fontWeight='bold' mx={2}>
                        Reservations
                    </ChakraLink>
                    <ChakraLink as={Link} to='/order-online' color='black' fontWeight='bold' mx={2} whiteSpace='nowrap'>
                        Order Online
                    </ChakraLink>
                    <Spacer />
                </Flex>
                <Box display={{ base: 'block', md: 'none' }} px={2}>
                    <IconButton
                        aria-label='Open menu'
                        icon={<FaBars />}
                        variant='ghost'
                        onClick={onOpen}
                        size='lg'
                    />
                </Box>

                <Box display={{ base: isOpen ? 'block' : 'none', md: 'none' }} position='absolute' top='0' right='0' w='100%'>
                    <Box bg='gray.100' p={2}>
                        <Flex justify='flex-end'>
                            <IconButton
                                aria-label='Close menu'
                                icon={<FaTimes />}
                                variant='ghost'
                                onClick={onClose}
                                size='lg'
                            />
                        </Flex>
                        <Box textAlign='center'>
                            <HStack flexDirection='column' spacing='4'>
                                <ChakraLink as={Link} to='/login' color='black' fontWeight='bold' mx={2} onClick={onClose}>
                                    Login
                                </ChakraLink>
                                <ChakraLink as={Link} to='/' color='black' fontWeight='bold' mx={2} onClick={onClose}>
                                    Home
                                </ChakraLink>
                                <ChakraLink as={Link} to='/about' color='black' fontWeight='bold' mx={2} onClick={onClose}>
                                    About
                                </ChakraLink>
                                <ChakraLink as={Link} to='/menu' color='black' fontWeight='bold' mx={2} onClick={onClose}>
                                    Menu
                                </ChakraLink>
                                <ChakraLink as={Link} to='/reservations' color='black' fontWeight='bold' mx={2} onClick={onClose}>
                                    Reservations
                                </ChakraLink>
                                <ChakraLink as={Link} to='/order-online' color='black' fontWeight='bold' mx={2} whiteSpace='nowrap' onClick={onClose}>
                                    Order Online
                                </ChakraLink>
                            </HStack>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );

};

export default Navbar;
