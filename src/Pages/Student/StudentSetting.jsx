import { Box, Tab, TabList, Tabs, TabPanel, TabPanels, TabIndicator } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import SidebarComponent from '../Auth/SidebarComponent';

const StudentSetting = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [data, setData] = useState([])
    const { userType, user_id } = useParams();
    console.log(userType, user_id)

console.log(isSmall)



    return (
        <div>

            <Box h="100%" w="100%" m="auto" mt="80px" display={"flex"} >

                <Box width={isSmall ? "100px" : "16%"} className='left'>
                    <SidebarComponent isSmall={isSmall} setIsSmall={setIsSmall} userType={userType} user_id={user_id} />
                </Box>
                <Box height={'100vh'} width={isSmall ? "93.5%" : "84%"} border="2px solid yellow" className='right' overflow="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >

                </Box>



            </Box>
        </div>
    )
}

export default StudentSetting