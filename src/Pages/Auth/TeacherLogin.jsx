'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Grid,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import {   AuthStudentLogin, AuthTeacherLogin, checkTokenPresence } from '../../Redux/Auth/Auth.action'
import axios from "axios"
import { AUTH_STUDENT_RESET_MESSAGE } from '../../Redux/Auth/Auth.actionTypes'

export default function TeacherLogin() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const toast = useToast()
  //const [data,setData]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData,setFormData]=useState({
      email:"",
      password:""
  })

 
  const auth=useSelector((state)=>state.auth)
  console.log(auth,"In TeacherLogin")


  useEffect(() => {
    if (auth.message === "Login Successfully") {
      toast({
        title: 'Teacher Login Successful !!',
        description: "You Have Succesfully Login in your Account !!",
        position: 'top',
        status: 'success',
        isClosable: true,
      })
     
       // navigate("/");
      
     

    } else if (auth.message === "Password is Incorrect") {
      toast({
        title: 'Password is Incorrect !!',
        description: "You've Entered wrong Password,Please Enter Correct Password",
        position: 'top',
        isClosable: true,
        status: "error"

      })
     // setInvalidUser(true)

    }else if (auth.message === "Email is not Valid") {
          toast({
            title: 'Email is not Listted !!',
            description: "You've Entered wrong Email address,Please Enter Correct Email ",
            position: 'top',
            isClosable: true,
            status: "error"
    
          })
         // setInvalidUser(true)
    
        }
    else if (auth.message === "Error While Login") {
          toast({
            title: 'Error from Server ,Try Again !!',
            description: "Error is from server Side ,Please Try After Sometime !!",

            position: 'top',
            isClosable: true,
            status: "error"
    
          })
         // setInvalidUser(true)
    
    }

    dispatch(checkTokenPresence());
    
    dispatch({ type: AUTH_STUDENT_RESET_MESSAGE });

   

  }, [auth.message,dispatch])









  
  const handleChange=(e)=>{
    //const { name, value } = e.target;
     const name=e.target.name
     const value=e.target.value
   //console.log(name,value)
    setFormData({...formData,[name]:value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== '' && formData.password !== '') {
      setIsLoading(true); // Show the spinner when the form is submitted
      try {
        await dispatch(AuthTeacherLogin(formData));
        setIsLoading(false); // Hide the spinner after login attempt
      } catch (error) {
        setIsLoading(false); // Hide the spinner if there's an error
      }
    }
  };

 






  
  return (
    <Box mt='100px' padding={"10px"}>
      <Stack minH={{ base: "100vh", sm: "100vh", md: "90vh", lg: "80vh" }} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} bgColor={"#4267B2"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
          <Stack spacing={4} borderRadius={"10px"} w={'100%'} bgColor={"white"} maxW={'lg'} padding="20px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Heading textAlign={"center"} fontSize={'3xl'} mt="10px" fontFamily={"cursive"} > Login to your Teacher Account</Heading>
            {/* <p fontSize={'xl'} >Login as a Teacher</p> */}
            <form onSubmit={handleSubmit}>
              <FormControl id="email" mt="20px">
                <FormLabel>Email address</FormLabel>
                <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter Your Correct Password'
                />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.500'}>Forgot password?</Text>
                </Stack>
                <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                {isLoading ? <Spinner size='md' color='white' /> : 'Login'}
                </Button>

                <Box>
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr",lg: "repeat(2, 1fr)" }} // 1 column on small, 2 columns on medium
                    gap={2} // Space between buttons
                  >
                    <Link to="/teachersignup">
                      <Button
                        colorScheme={"white"}
                        variant={"solid"}
                        color={"black"}
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        w="100%" // Full width for small screens, auto for medium
                      >
                        New Teacher? Create an account
                      </Button>
                    </Link>
                    <Link to="/studentlogin">
                      <Button
                        colorScheme={"white"}
                        variant={"solid"}
                        color={"black"}
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        w="100%" // Full width for small screens, auto for medium
                      >
                        Login as a Student
                      </Button>
                    </Link>
                  </Grid>
                </Box>


              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1} >
          <Box
            display={{ base: "none", sm: "none", md: "block" }} // Hide on small screens, show on medium and up
          >
            <Image
              h="100%"
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}