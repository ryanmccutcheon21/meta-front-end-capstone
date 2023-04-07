import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Footer = () => {
    return (
        <Box bg="brand.highlight1" color="brand.primary1" py={10}>
            <Flex justify="space-between" align="center" wrap="wrap">
                <Box flex="1 1 auto" mb={{ base: 8, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                        Our Links
                    </Text>
                    <Flex direction="column" alignItems="center" flexWrap="wrap">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/reservations">Reservations</Link>
                        <Link href="/order-online">Order Online</Link>
                        <Link href="/login">Login</Link>
                        <Link href="/contact">Contact</Link>
                    </Flex>
                </Box>
                <Box flex="1 1 auto" mb={{ base: 8, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                        Contact Us
                    </Text>
                    <Flex direction="column" alignItems="center">
                        <Text>123 Main St, Anytown USA</Text>
                        <Text>(555) 555-5555</Text>
                        <Link href="mailto:info@example.com">info@example.com</Link>
                        <Flex mt={4}>
                            <Link href="#">
                                <Box as="span" fontSize="2xl" mr={4}>
                                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                </Box>
                            </Link>
                            <Link href="#">
                                <Box as="span" fontSize="2xl" mr={4}>
                                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                                </Box>
                            </Link>
                            <Link href="#">
                                <Box as="span" fontSize="2xl" mr={4}>
                                    <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                                </Box>
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
