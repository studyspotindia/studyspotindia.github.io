import { Box, Tab, TabList, Tabs, TabPanel, TabPanels, TabIndicator } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';



const TabComponents = () => {
    // const location = useLocation();
    // console.log(location)
    const [data, setData] = useState([])
    const { userType, user_id } = useParams();
    console.log(userType, user_id)





    return (
        <Box border="" h="500px" w="93%" m="auto" mt="110px">
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>User-Details</Tab>
                    <Tab>Course-Information</Tab>
                </TabList>
                <TabIndicator
                    mt="-22px"
                    height="5px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                       <Box border="1px solid red" h="400px"></Box>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>



        </Box>
    )
}

export default TabComponents