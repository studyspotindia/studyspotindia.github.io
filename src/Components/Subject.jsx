import React, { useEffect } from 'react'
import "./Subject.modules.css"
import { Avatar, Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import studentpost from "../Images/student.webp"
import bell from "../Images/notify.webp"
import bio from "../Images/bio.webp"
import { SubjectData, TeacherData } from '../Data/Dummy'
import { settings2 } from '../Data/ResponsiveCard'
import Slider from "react-slick";
import { FaBalanceScaleRight } from 'react-icons/fa';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Subject = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);


    return (
        <div className='mainSubjectDIv'>

            <Box  height="auto" width={{ base: "80%", sm: "80%", md: "80%", lg: "80%" }} m="auto" mt="40px">
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={4}>
                <Link to="/teachersignup">
                <Box data-aos="fade-right"  height={{ base: "150px", sm: "100px", md: "200px", lg: "300px" }}  borderRadius={"20px"}  display="flex" border="0.1px solid gray" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" cursor={"pointer"}>
                   <Box  w="30%" h="100%" display={"flex"} alignContent={"center"}>
                   <Image src={'https://as2.ftcdn.net/v2/jpg/06/25/89/99/1000_F_625899981_EvuwXwEf7Z2QqnQETomxqm6RdG9R1ZH3.jpg'} h="60%" w="80%" m="auto" />
                   </Box>
                   <Box  w="70%" h="100%" display={"flex"}  justifyContent={"center"} alignItems={"center"} bg="#3399FF"   borderRightRadius={"19px"}>
                   <Text fontFamily= "Nunito,sans-serif" fontSize={{base:"38px",md:"38px",lg:"45px"}} color="white" ml="10px">Become a Tutor</Text>
                   </Box>
                  
                   
               </Box>
                </Link>
            
               <Link to="/studentsignup">
               <Box  data-aos="fade-left" height={{ base: "150px", sm: "100px", md: "200px", lg: "300px" }} border="0.1px solid gray" borderRadius={"20px"}  display="flex" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" cursor={"pointer"}>
                   <Box w="30%" h="100%" display={"flex"} alignContent={"center"}>
                   <Image src={'https://cdn.pixabay.com/photo/2022/02/03/14/19/student-6990523_1280.png'} h="60%" w="80%" m="auto" />
                   </Box>
                   <Box   w="70%" h="100%" display={"flex"}  justifyContent={"center"} alignItems={"center"} bg="teal" borderRightRadius={"19px"}>
                   <Text fontFamily= "Nunito,sans-serif" fontSize={{base:"36px",md:"38px",lg:"45px"}} color="white" ml="10px">Become a Student</Text>
                   </Box>
                  
                   
               </Box>
                </Link>
               
            </SimpleGrid>
               
            </Box>

            <Text fontFamily="sans-serif" fontSize={{ base: "28px", sm: "28px", md: "31px", lg: "4xl" }} mt="140px" textAlign="center" fontWeight={"bold"}>Get a Perfect Home Tutor within 30 Minutes</Text>

            <Box data-aos="fade-right"  height="auto" w="80%" m="auto" mt="60px" padding="5px"
            //border="1px solid purple"
            
            >
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }} spacing={12}>
                    <Box data-aos="flip-up"  h="220px" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px" padding={"10px"}>
                        <Box className='cardOne' border="1px solid blue" h="100px" w="100px" borderRadius={"5px"} m="auto" mt="10px">
                            <Image src={studentpost} w="100%" h="100%" />
                        </Box>
                        <Text cursor="pointer" _hover={{ color: 'blue' }} fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "18px" }} textAlign={"center"} mt="20px">Post Free Requirement</Text>
                    </Box>
                    <Box data-aos="flip-down"  h="220px" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px" padding={"10px"}>
                        <Box className='cardOne' border="1px solid blue" h="100px" w="100px" borderRadius={"5px"} m="auto" mt="10px" padding="10px">
                            <Image src={bell} w="100%" h="100%" />
                        </Box>
                        <Text cursor="pointer" _hover={{ color: 'blue' }} fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "18px" }} textAlign={"center"} mt="20px">Instant Responses</Text>
                    </Box>
                    <Box data-aos="flip-up"  h="220px" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px" padding={"10px"}>
                        <Box className='cardOne' border="1px solid blue" h="100px" w="100px" borderRadius={"5px"} m="auto" mt="10px" padding="10px">
                            <FaBalanceScaleRight style={{width:"80px",height:"80px",margin:"auto",}}/>
                        </Box>
                        <Text cursor="pointer" _hover={{ color: 'blue' }} fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "18px" }} textAlign={"center"} mt="20px">Compare, Hire and Learn</Text>
                    </Box>
                </SimpleGrid>

            </Box>

            <Box data-aos="zoom-out-right"  h="auto" w={{ base: "98%", sm: "98%", md: "95%", lg: "80%" }} m="auto" mt="80px">

                <Text fontFamily="sans-serif" fontSize={{ base: "30px", sm: "30px", md: "4xl", lg: "4xl" }} textAlign="center" fontWeight={"bold"}>Tutors According to your Subjects</Text>
                <Box mt="50px" >
                    <SimpleGrid columns={{ base: 2, sm: 2, md: 2, lg: 4 }} >
                        {
                            SubjectData.map((ele) => (
                                <Box data-aos="zoom-out-left" h="200px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" >
                                    <Box className='card' h="100px" w="100px" borderRadius={"5px"} m="auto" mt="20px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" padding="10px">
                                        <Image src={ele.image} w="100%" h="100%" />
                                    </Box>
                                    <Text cursor="pointer" _hover={{ color: 'blue' }} fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "18px" }} textAlign={"center"} mt="20px">{ele.title}</Text>
                                </Box>

                            ))

                        }
                        {/* <Box h="200px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                            <Box h="100px" w="100px" borderRadius={"5px"} m="auto" mt="20px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                                <Image src={bio} w="100%" h="100%" />
                            </Box>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "18px" }} textAlign={"center"} mt="20px">Biology</Text>
                        </Box> */}

                    </SimpleGrid>
                </Box>

            </Box>

            <Box h="auto" w="90%" m="auto" mt="60px">
                <Text data-aos="flip-right" fontFamily="sans-serif" fontSize={{ base: "27px", sm: "27px", md: "31px", lg: "4xl" }} textAlign="center" fontWeight={"bold"}>WHY STUDYSPOT ?</Text>

                <Box  height="auto" w="100%" m="auto" mt="30px" padding={"20px"} boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px">
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }} spacing={0}>
                        <Box data-aos="zoom-in-down" borderRight={{ base: 'none', md: 'none', lg: '1px solid gray' }} borderBottom={{ base: '1px solid gray', md: '1px solid gray', lg: "none" }} h="300px" >
                            <Box className='cardTwo' border="1px solid blue" h="120px" w="120px" borderRadius={"5px"} m="auto" mt="30px" padding="10px">
                                <Image src="https://www.gharpeshiksha.com/images/post_new.webp" w="100%" h="100%" />
                            </Box>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "22px" }} textAlign={"center"} mt="20px" color="#2883FF">10,778</Text>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "22px" }} textAlign={"center"} color="#2883FF">Requirement Posted</Text>
                        </Box>
                        <Box data-aos="zoom-in-down" borderRight={{ base: 'none', md: 'none', lg: '1px solid gray' }} borderBottom={{ base: '1px solid gray', md: '1px solid gray', lg: "none" }} h="300px" >
                            <Box className='cardTwo' border="1px solid blue" h="120px" w="120px" borderRadius={"5px"} m="auto" mt="30px" padding="10px">
                                <Image src="https://www.gharpeshiksha.com/images/tutor_new.webp" w="100%" h="100%" />
                            </Box>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "22px" }} textAlign={"center"} mt="20px" color="#2883FF">92539</Text>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "22px" }} textAlign={"center"} color="#2883FF">Registered Tutors</Text>
                        </Box>
                        <Box data-aos="zoom-in-down" border=" " h="300px" >
                            <Box className='cardTwo' border="1px solid blue" h="120px" w="120px" borderRadius={"5px"} m="auto" mt="30px" padding="10px">
                                <Image src="https://www.gharpeshiksha.com/images/removebg.webp" w="100%" h="100%" />
                            </Box>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "22px" }} textAlign={"center"} mt="20px" color="#2883FF">4.8</Text>
                            <Text fontFamily="sans-serif" fontSize={{ base: "19px", sm: "19px", md: "21px", lg: "21px" }} textAlign={"center"} color="#2883FF">Ratings on Social Media</Text>
                        </Box>
                    </SimpleGrid>

                </Box>

            </Box>

            <Box data-aos="zoom-in-up" h="600px" w="100%"  m="auto" mt="110px" bgColor='#51B2FF'>

                <Box  h="600px" w="90%" border="1px solid #51B2FF" m="auto" >
                    <Text data-aos="zoom-out-right" fontFamily="sans-serif" fontSize={{ base: "27px", sm: "27px", md: "31px", lg: "4xl" }} textAlign="center" fontWeight={"bold"} mt="50px" color="#333333">Few of our Top Tutors</Text>
                    <Box className="Slide2" w="100%" mt="60px" >
                        <Slider {...settings2} >
                            {TeacherData.map((item) => (
                                <Box className="Slider-card"  h="300px"  bg="white"  >
                                    {/* <img src={item.image} /> */}
                                    <Box bgColor='#51B2FF' textAlign={"center"} w="100%"  zIndex={"99"}>
                                        <Avatar size={"2xl"} src={item.image} textAlign={"center"} />
                                        {/* <Image src={item.image} h="100%" w="100%" /> */}
                                    </Box>
                                    <Box mt='-50px' bg='white' border={"1px solid white"} h="167px" w="100%" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px">
                                        <Box  h="100px" w="80%" m="auto" mt="52px">
                                            <Text  _hover={{ color: 'purple' }} fontSize={"22px"} fontFamily={"sans-serif"} fontWeight={500}>{item.title}</Text>
                                            <Text  _hover={{ color: 'purple' }} fontSize={"22px"} fontFamily={"sans-serif"} fontWeight={500}>{item.Edu}</Text>
                                            <Text  _hover={{ color: 'purple' }} fontSize={"22px"} fontFamily={"sans-serif"} fontWeight={500}>{item.year}</Text>


                                        </Box>

                                    </Box>
                                    <Box h="55px" >
                                        <button style={{width:"100%",height:"55px",backgroundColor:"#0063D1"}} >
                                            <Text fontSize={"23px"} fontFamily={"sans-serif"} fontWeight={"500"} color="white">Contact Tutor</Text>
                                          
                                            </button>
                                    </Box>
                                    {/* <Button size={"lg"} w="100%" h="">Click Hear</Button> */}


                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>

            </Box>
        </div>
    )
}

export default Subject