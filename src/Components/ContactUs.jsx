import React, { useEffect } from 'react';
import { Container, Flex, Text, Icon, Link, Button, Box, Input, SimpleGrid } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';


import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box id="contactus" width="100%" mt="50px">
      <Box className="contact"  width="100%"  
      //border="1px solid yellow"
      >
      <Text fontSize="38px" color="teal" textAlign={"center"}>
            Contact Us
          </Text>
        <Box className="contactText"  w="100%"   mt="50px" padding={"10px"} paddingTop={"30px"} paddingBottom={"30px"}
        //border="1px solid red"
        >
         
          <Flex className="middleSection" flexWrap="wrap" justify={{ base: "center", md: "center",lg:"space-around" }} gap="5">
            <ContactInfo
              icon={<PhoneIcon boxSize={8} />}
              title="Phone"
              description="Contact with Us"
              link={<a href="tel:+91-8826611071" rel="noreferrer" target="_blank"><Text color="teal">+91-8826611071</Text></a>}
            />
            <ContactInfo
              icon={<EmailIcon  boxSize={8} />}
              title="Email"
              description="Click and Mail Us"
              link={<a href="mailto:studyspotindia@gmail.com" rel="noreferrer" target="_blank"><Text color="teal">studyspotindia@gmail.com</Text></a>}
            />
            <ContactInfo
              icon={<Icon as={BsInstagram} boxSize={8} />}
              title="Instagram"
              description="Click and Follow Us"
              link={<a href="" rel="noreferrer" target="_blank"><Text color="teal">Studyspot</Text></a>}
            />
            <ContactInfo
              icon={<Icon as={FaLinkedin} boxSize={8} />}
              title="LinkedIn"
              description="Connect With me"
              link={<a href="" rel="noreferrer" target="_blank"><Text color="teal">Just One Click</Text></a>}
            />
            <ContactInfo
              icon={<Icon as={GrLocation} boxSize={8} />}
              title="Location"
              description="Delhi, India"
              link={
                <a href="https://www.google.com/maps/place/STUDYSPOT+%5BHome+Tuition+Services%5D/@28.5864436,77.081902,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1bfecd203135:0x2e6f5526e52acb30!8m2!3d28.5864436!4d77.081902!16s%2Fg%2F11t1mm7fd6?entry=ttu"
                   rel="noreferrer" target="_blank"><Text color="teal">View on Google map</Text></a>}
            />
          </Flex>
        </Box>
        <Box className="contactForm" w={{ base: '90%', md: '80%' ,lg:"90%"}} m="auto" mt="50px">
          <form
            action="https://getform.io/f/d8843484-ed75-42c6-a834-c93b726d63d3"
            method="POST"
          >
            <SimpleGrid className="contactForm" columns={{base:"1",md:"2",lg:"2"}} spacing={10}>
            <Box  >
              <Input isRequired data-aos="fade-right"  type="text"          name="name" placeholder="Enter Your Name Please" border="1px solid black" />
              <Input isRequired data-aos="fade-right" mt="15px" type="text" name="email" placeholder="Enter Your E-mail Please" border="1px solid black"/>
              <Input isRequired data-aos="fade-right" mt="15px" type="text" name="phone" placeholder="Enter Your Phone Number" border="1px solid black"/>
             
            </Box>
            <Box>
            <TextareaField  name="massage" placeholder="Enter Your Details Like- Class,Subject,Location ......etc"  w={{base:"90%",md:"90%",lg:""}} border="1px solid black"/>
              <Button   w={{base:"95%",md:"50%",lg:"30%"}} data-aos="flip-left" bg="teal" color="white" type="submit" ml={{base:"",md:"44%",lg:"65%"}}>Send Message</Button>
            </Box>
            </SimpleGrid>
           
          </form>
        </Box>
      </Box>
      {/* <Flex className="endSection" align="center" justify="center" h="70px" bg="black" color="white" mt="20px">
        <Text>© 2022 Shivang. Design by Me with <Icon as={FavoriteIcon} color="#01a479" /></Text>
      </Flex> */}
    </Box>
  );
};

const ContactInfo = ({ icon, title, description, link }) => (
  <Flex data-aos="fade-up" direction="column" align="center">
    {icon}
    <Text fontSize="x-large" mt="2">{title}</Text>
    <Text>{description}</Text>
    {link}
  </Flex>
);

const InputField = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    style={{
      width: '95%',
      padding: '5px 5px 5px 15px',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
    }}
  />
);

const TextareaField = ({ name, placeholder }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    style={{
      width: '95%',
      height: '175px',
      marginBottom: '30px',
      position: 'relative',
      padding: '5px 5px 5px 10px',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
    }}
  />
);

export default ContactUs;
