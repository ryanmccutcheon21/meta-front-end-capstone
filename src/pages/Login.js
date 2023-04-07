import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Container
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleSignUp = () => setIsSignUp(!isSignUp)

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: isSignUp ? Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required') : Yup.string(),
  })

  const handleSubmit = (values) => {
    console.log(values)
    // handle login or signup logic
  }

  return (
    <>
      <Navbar />
      <Box
        w="100%"
        h="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="brand.primary1"
      >
        <Box
          w={{ base: '90%', md: '70%', lg: '50%' }}
          h="auto"
          p="6"
          borderRadius="md"
          boxShadow="md"
          bg="brand.highlight1"
        >
          <Heading as="h2" mb="6" color="brand.primary2" fontSize={40} fontWeight="extrabold">
            {isSignUp ? 'Sign Up' : 'Login'}
          </Heading>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form>
                <Stack spacing="4">
                  <Field name="email">
                    {({ field }) => (
                      <FormControl id="email" mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" {...field} />
                        {errors.email && touched.email && (
                          <Box mt="1" color="red" fontSize="sm">
                            {errors.email}
                          </Box>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <FormControl id="password" mb="4">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" {...field} />
                        {errors.password && touched.password && (
                          <Box mt="1" color="red" fontSize="sm">
                            {errors.password}
                          </Box>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  {isSignUp && (
                    <Field name="confirmPassword">
                      {({ field }) => (
                        <FormControl id="confirmPassword" mb="4">
                          <FormLabel>Confirm Password</FormLabel>
                          <Input type="password" {...field} />
                          {errors.confirmPassword && touched.confirmPassword && (
                            <Box mt="1" color="red" fontSize="sm">
                              {errors.confirmPassword}
                            </Box>
                          )}
                        </FormControl>
                      )}
                    </Field>
                )}
                <Button 
                    type="submit" 
                    bg='brand.primary2' 
                    w="30%" 
                    p={2} 
                    borderRadius={16} 
                    alignSelf="center" 
                    mb="4" 
                    _hover={{backgroundColor: 'brand.secondary1'}}
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                </Button>
                <Button 
                    onClick={toggleSignUp} 
                    colorScheme="brand.secondary1" 
                    variant="outline"
                    _hover={{textDecoration: 'underline'}}
                    >
                        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                </Button>
                </Stack>
            </Form>
            )}
        </Formik>
    </Box>
    </Box>
  <Footer />
</>
  )
}

export default Login