import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorMode,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Avatar,
  useStyleConfig,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Center,

} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';

import { Link, useLocation } from 'react-router-dom';
import { Link as ReactScrollLink } from 'react-scroll';
import logo from "../Images/Logo.png"
import logo1 from "../Images/Logo1.png"
import logo12 from "../Images/Logo12.png"
import studyspot from "../Images/studyspot.jpg"
import studyspot12 from "../Images/studyspot12.jpg"
import studyLogo from "../Images/studylogo.svg"
import { useDispatch, useSelector } from 'react-redux';
import { authStudentLogout, checkTokenPresence } from '../Redux/Auth/Auth.action';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from "axios"



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [head, setHead] = useState(false);
  const [data, setData] = useState([])
  const [userType, setUserType] = useState('student');
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const location = useLocation();



  const auth = useSelector((state) => state.auth)
  console.log(auth.isAuthenticated, "In navbar")
  const cookieUserID = Cookies.get('userId');


  useEffect(() => {



    dispatch(checkTokenPresence());


    const getSingleStudent = async () => {
      try {
        const cookieUserID = Cookies.get('userId');
        //let userType = 'student'; // Default to student

        if (location.pathname === '/teacherlogin') {
          setUserType('tutor');
        }

        // Wait for a short period (e.g., 500 milliseconds) before making the fetch request
        if (cookieUserID) {
          const response = await axios.get(`https://tricky-plum-garters.cyclic.cloud/${userType}/${cookieUserID}`);
          const studentData = response.data;
          setData(studentData);
        }

        console.log(cookieUserID)
      } catch (error) {
        console.error(error);
      }
    }
    getSingleStudent()
    // window.location.reload(true);


  }, [dispatch, cookieUserID, location.pathname]);





  console.log(data, "checking data is coming")


  const handleLogout = () => {
    dispatch(authStudentLogout());
    setData([])

  };



  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'80px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      zIndex="sticky"

    >
      <Flex

        // bg={useColorModeValue('white', 'gray.800')}
        // color={useColorModeValue('gray.600', 'white')}
        // minH={'80px'}
        // py={{ base: 2 }}
        // px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        //borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}

      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box display={{ base: 'none', sm: 'block', md: 'none', lg: 'block' }} h={{ base: "60px", sm: "60px", md: "60px", lg: "60px" }} w={{ base: "80px", sm: "20px", md: "80px", lg: "140px" }}>
            <Link to="/">
              <Image h="100%" w="100%" borderRadius={"10px"} src={studyspot} />

            </Link>
          </Box>
          <Link to="/">
            <Box display={{ base: 'block', sm: 'none', md: 'block', lg: 'none' }}>
              <Avatar border="1px solid gray" size={"lg"} src={studyspot12} />
            </Box>
          </Link>


          <Flex display={{ base: 'none', md: 'flex' }} justifyContent={"center"} alignItems={"center"} ml={{ base: 10, md: 5, lg: 10 }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          {/* <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button> */}

          {auth.isAuthenticated === false || auth.isAuthenticated === undefined ? (
            <Link to="/studentlogin">
              <Button
                as={'a'}
                fontSize={{ base: 'md', sm: "md", md: 'md' }}
                fontWeight={{ base: '500', sm: "300", md: '400', lg: "600" }}
                //variant={'link'}


                _hover={{
                  bg: 'green.300',
                }}
                color="white"
                bg={'#25D366'}
              >
                Login
              </Button>
            </Link>

          ) : (
            <Button
              onClick={handleLogout}
              fontSize={{ base: 'md', sm: "md", md: 'md' }}
              fontWeight={{ base: '500', sm: "300", md: '400', lg: "600" }}
              display={{ base: 'none', sm: "inline-flex", md: 'inline-flex' }}
              //variant={'link'}
              _hover={{
                bg: 'green.300',
              }}
              color="white"
              bg={'#25D366'}
              mt="10px"
            >
              Logout
            </Button>

          )

          }

         
          {auth.isAuthenticated === false || auth.isAuthenticated === undefined ? (
            <Link to="/studentsignup">
              <Button
                as={'a'}
                display={{ base: 'none', sm: "inline-flex", md: 'inline-flex' }}
                fontSize={{ base: 'md', sm: "sm", md: 'md' }}
                fontWeight={{ sm: "300", md: '400', lg: "600" }}
                color={'white'}
                bg={'#00B2FF'}

                _hover={{
                  bg: 'blue.300',
                }}>
                Sign Up
              </Button>
            </Link>

          ) : (




            <Menu key={data._id} >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'lg'}
                  src={data.profile} />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={data.profile}
                  />
                </Center>
                <br />
                <Center>
                  <p>{data.name}</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <Link to={`/${userType}/studentprofile/${cookieUserID}`}>
                  <MenuItem>Account Settings</MenuItem>
                </Link>

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>






          )

          }



        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const { colorMode } = useColorMode();

  const textColorStyles = {
    base: {
      color: 'white',
      _hover: {
        color: 'blue.500',
      },
    },
    dark: {
      color: 'white',
      _hover: {
        color: 'blue.300',
      },
    },
  };


  const textColorStyle = useStyleConfig('Text', { styleConfig: textColorStyles });

  return (
    <Stack direction={'row'} spacing={9}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.to || '#'} // You can provide a fallback link here if `to` is not specifie
                  sx={textColorStyle}
                 >
                  <Button
                  colorScheme='whiteAlpha'
                  >
                    <Text
                      fontSize={{ base: "19px", sm: "15px", md: "15px", lg: "19px" }}
                      fontWeight={"500"}
                      fontFamily={"inherit"}
                      color={colorMode === 'dark' ? 'white' : 'black'}
                      _hover={{
                        //textDecoration: 'none',
                        color: "blue",
                      }}
                    >
                      {navItem.label}
                    </Text>
                  </Button>


                </Link>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          ) :(
            <ReactScrollLink
              p={2}
             // to={navItem.to || 'contactus'} // You can provide a fallback link here if `to` is not specified
              fontSize={'sm'}
              fontWeight={500}
              _hover={{
                textDecoration: 'none',
                //color: linkHoverColor,
              }}
              to="contactus"
              activeClass="active"
              smooth={true} // Add smooth scrolling effect
              offset={-50} // Optional offset for precise scrolling position
              //duration={500} // Scroll duration in milliseconds
            >
              <Button
                colorScheme='whiteAlpha'
              >
                <Text
                  fontSize={{ base: "19px", sm: "15px", md: "15px", lg: "19px" }}
                  fontWeight={"500"}
                  fontFamily={"inherit"}
                  color={colorMode === 'dark' ? 'white' : 'black'}
                  _hover={{
                    //textDecoration: 'none',
                    color: "blue",
                  }}
                >
                  {navItem.label}
                </Text>

              </Button>

            </ReactScrollLink>
          )
          }
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Link
      to={to}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.500' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {Mob_NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to || '#'} // You can provide a fallback link here if `to` is not specified
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};




const NAV_ITEMS = [
  {
    label: 'Search Tutor',
    children: [
      {
        label: 'Explore Tutor',
        subLabel: 'Find Trending Tutor',
        to: '/explore', // Replace with the appropriate route path
      },
      {
        label: 'New & Tutor',
        subLabel: 'Up-and-coming Tutor',
        to: '/newtutor', // Replace with the appropriate route path
      },
    ],
  },
  {
    label: 'Study Material',
    children: [
      {
        label: 'All Subject',
        subLabel: 'Find your Subject',
        to: '/allsubject', // Replace with the appropriate route path
      },
      {
        label: 'Poem',
        subLabel: 'Find you dream poem',
        to: '/poem', // Replace with the appropriate route path
      },
    ],
  },
  {
    label: 'About',
    to: '/', // Replace with the appropriate route path
  },
  {
    label: 'Contact us',
    to: '/contactus', // Replace with the appropriate route path
  },
];


const Mob_NAV_ITEMS = [
  {
    label: 'SEARCH TUTOR',
    children: [
      {
        label: 'Explore Tutor',
        subLabel: 'Find Trending Tutor',
        to: '/explore', // Replace with the appropriate route path
      },
      {
        label: 'New & Tutor',
        subLabel: 'Up-and-coming Tutor',
        to: '/newtutor', // Replace with the appropriate route path
      },
    ],
  },
  {
    label: 'STUDY MATERIAL',
    children: [
      {
        label: 'All Subject',
        subLabel: 'Find your Subject',
        to: '/allsubject', // Replace with the appropriate route path
      },
      {
        label: 'Poem',
        subLabel: 'Find you dream poem',
        to: '/poem', // Replace with the appropriate route path
      },
    ],
  },
  {
    label: 'About',
    to: '/aboutus', // Replace with the appropriate route path
  },
  {
    label: 'ContactUs',
    to: '/contactus', // Replace with the appropriate route path
  },
  {
    label: 'Sign Up',
    to: '/studentsignup', // Replace with the appropriate route path
  },
];