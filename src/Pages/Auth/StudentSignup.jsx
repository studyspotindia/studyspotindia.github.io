'use client'

import { useEffect, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  FormErrorMessage,
  Checkbox,
  Grid,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authStudentSignup } from '../../Redux/Auth/Auth.action';
//StudentModel
// {
//     "email":"kshivang80@gmail.com",
//     "password":"12345",
//     "name":"Shivang kumar",
//     "profile":"new Profile",
//     "phone":9999999999,
//     "classname":"12th",
//     "location":"delhi",
//     "subject":"JavaScript",
//     "tutiontype":"Home",
//     "fees":1245
    
//   }



const Form1 = ({ formData, setFormData }) => {
 
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box mt={{base:"60px",sm:"100px",md:"60px",lg:"60px"}}>
      <Heading w="100%" textAlign={'center'} fontWeight="600" mb="2%" fontFamily={"sans-serif"}>
        Student Registration
      </Heading>
      <Flex mt="40px">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'600'}>
            Student Name
          </FormLabel>
          <Input 
          id="name" 
          placeholder="First name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'600'}>
          Profile Pic
          </FormLabel>
          <Input 
          id="last-name" 
          placeholder="Enter Profile Pic URL" 
          name="profile"
          value={formData.profile}
          onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'600'}>
          Email address
        </FormLabel>
        <Input 
        id="email" 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'600'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  )
}

const Form2 = ({ formData, setFormData }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      const truncatedValue = numericValue.slice(0, 10); // Limit to 10 characters
      setFormData({ ...formData, [name]: truncatedValue });
      console.log(name,truncatedValue)
    } else {
      setFormData({ ...formData, [name]: value });
      console.log(name,value)
    }
  };
  // phone:"",
  // classname:"",
  // location:"",
  // subject:"",
  // tutiontype:"",
  // fees:"",
  // const validatePhone = (value) => {
  //   if (value.length !== 10) {
  //     return 'Phone number should be exactly 10 digits.';
  //   }
  //   return '';
  // };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Student Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="Class"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
         Class / Course Student Pursuing ?
        </FormLabel>
        <Select
          id="country"
          name="classname"
          
          value={formData.classname}
          onChange={handleChange}
          placeholder='Select Option'
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          >
          <option>Nursery</option>
          <option>Class I</option>
          <option>Class II</option>
          <option>Class III</option>
          <option>Class IV</option>
          <option>Class V</option>
          <option>Class VI</option>
          <option>Class VII</option>
          <option>Class VIII</option>
          <option>Class IX</option>
          <option>Class X</option>
          <option>Class XI</option>
          <option>Class XII</option>
          <option>First Year</option>
          <option>Second Year</option>
          <option>Third Year</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          House Address
        </FormLabel>
        <Input
          type="text"
          
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          // autoComplete="street-address"
          // focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          variant='outline'
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="Subject"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Subject(s) you want to learn ?
        </FormLabel>
        <Select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          autoComplete="subject"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          >
          <option>All Subject</option>
          <option>English</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>Social Science</option>
          <option>Sanskrit</option>
          <option>Hindi</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Biology</option>
          <option>Computer Science</option>
          <option>Accounts</option>
          <option>Business Studies</option>
          <option>Economics</option>
          <option>Geography</option>
          <option>History</option>
          <option>Psychology</option>
          <option>Physical Education</option>
          <option>Art & Creativity</option>
         
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
         Tution Type
        </FormLabel>
        <Select
          id="tutiontype"
          name="tutiontype"
          value={formData.tutiontype}
          onChange={handleChange}
          placeholder='Select Tution Type'
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          >
          <option>Online Class (via Zoom, Google Meet, Skype etc) </option>
          <option>Home Tuition at My Home</option>
          <option>Willing to travel to Teacher's Home</option>
          
         
        </Select>
      </FormControl>

      <FormControl >
      <FormLabel
          htmlFor="state"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
         Phone Number
        </FormLabel>
          <Input
           variant='outline'
           type="text"
           inputMode="numeric" // Specify numeric input mode
           pattern="[0-9]*" // Use pattern to enforce numeric input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            shadow="sm"
            size="md"
            w="full"
            rounded="md"
            required
          />
          {/* <FormErrorMessage>{validatePhone(formData.phone)}</FormErrorMessage> */}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="md"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
        Your approximate Monthly Budget ?
        </FormLabel>
        <Select
          id="fees"
          name="fees"
          value={formData.fees}
          onChange={handleChange}
          placeholder='Select Tution Type'
          shadow="sm"
          size="md"
          // boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          w="full"
          rounded="md"
          >
          <option>Basic Rs.4000 - 4640 </option>
          <option>Standard Rs.4640 - 5200 </option>
          <option>Expertise Rs.5200 - 6000 </option>
          
         
        </Select>
      </FormControl>

      
    </>
  )
}

const Form3 = ({ formData, setFormData }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Other Information
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="md"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="md"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

const InitialData={
  email:"",
  password:"",
  name:"",
  profile:"",
  phone:"",
  classname:"",
  location:"",
  subject:"",
  tutiontype:"",
  fees:"",

}

export default function StudentSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData]=useState(InitialData)

  const auth = useSelector((state) => state.auth);
    console.log(auth, "message in signup")

  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(50) // Initialize based on current step


  useEffect(()=>{
    if(auth.message==="You are registered"){
        toast({
            title: 'Register Successful',
            position: 'top',
            status: 'success',
            isClosable: true,
          })
         // navigate("/login");

    }else if(auth.message==="User already exists"){
        toast({
            title: 'User already exists',
            position: 'top',
            status: 'error',
            isClosable: true,
          })

    }else if(auth.message==="Error while registering"){
        toast({
            title: 'Something went Wrong',
            position: 'top',
            status: 'error',
            isClosable: true,
          })

    }

},[auth.message])


  const handleSubmit = (event) => {
    event.preventDefault();
   if (formData.email !== "" && formData.password !== "" && formData.name !== "" && formData.profile !== "" && formData.phone !== "" && formData.classname !== "" && formData.location !== "" && formData.subject !== "" && formData.tutiontype !== "" && formData.fees !== "") {
        dispatch(authStudentSignup(formData));
        console.log("done")
       // setFormData("")

    }

};


  return (
    <Box mt="150px" h="auto">
      <Box
        borderWidth="1px"
        rounded="lg"
       // shadow="1px 1px 3px rgba(0,0,0,0.3)"
       boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="" h="25px" borderRadius={"20px"} colorScheme='green' isAnimated></Progress>
        {step === 1 ? <Form1 formData={formData} setFormData={setFormData}/> :  <Form2  formData={formData} setFormData={setFormData}/> }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 50)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 2) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 50)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>

        <Box mt="50px">
              <Grid
                templateColumns={{ base: "1fr", md: "1fr", lg: "repeat(2, 1fr)" }} // 1 column on small, 2 columns on medium
                gap={2} // Space between buttons
              >
                <Link to="/studentlogin">
                  <Button
                    colorScheme={"white"}
                    variant={"solid"}
                    color={"black"}
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    w="100%" // Full width for small screens, auto for medium
                  >
                    Existing Student? Go to Login Page
                  </Button>
                </Link>
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
              </Grid>
            </Box>
      </Box>
    </Box>
  )
}