'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    useColorModeValue,
    Text,
    Container,
    Box,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function QandA() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);



    return (
        <Box h="auto">



            <Flex
                h="auto"
                mt="100px"
                //border={"1px solid teal"}
                bg={useColorModeValue('gray.50', 'gray.800')}
                //p="30px"
            >
                <Container 
                //border="1px solid yellow"
                    //position="absolute" // Use absolute positioning for the Container
                    maxW="100%"
                            // Adjust the left position as needed
                >
                    <Text fontSize={"35px"} fontFamily={"sans-serif"} textAlign={"center"} fontWeight={"600"}> FAQ - Home Tuition</Text>
                    <Accordion allowMultiple width={{ base: "100", sm: "", md: "80%", lg: "80%" }} m="auto" mt="50px"
                     //border="1px solid black"
                     >
                        <AccordionItem data-aos="fade-right">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">Is Trial Class Free or Paid ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    Trial Class can be a free or paid depending on tutor. In most cases, Trial Class is free of cost However in some cases experienced tutor might demand paid Trial Class.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem >
                        <AccordionItem data-aos="fade-left">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">To Whom I need to Pay ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    You can pay directly to tutor or You can also pay on our website. We will settle the amount with teacher only after asking you.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem data-aos="fade-right">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">Will I have to pay in advance or Can I pay Session Wise ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    In monthly charge, payment is usually done in advance(Recommends payment on our website) and in session wise class payment is usually done session wise.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem data-aos="fade-left">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">Will I get the teacher's documents ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    Yes, We can show teacher's relevant documents on demand.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem data-aos="fade-right">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">Will my fees amount be refunded if I do not wish to continue ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    If payment is made through us, Yes we will refund your amount on pro-rata basis within 2 working days.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem data-aos="fade-left">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">What happen if teacher discontinue class in between ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    If payment is made through us, Your amount will be refunded on pro-rata basis or other tutor will be arranged.              </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem data-aos="fade-right">
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}>
                                <Text as='b' fontSize="md">Will I get fees payment receipt ?</Text>
                                <ChevronDownIcon fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text as='b' color="gray.600">
                                    If payment is made through us, Yes we provide payment receipt on each and every fees payment. ?</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Container>
            </Flex>

        </Box>

    )
}