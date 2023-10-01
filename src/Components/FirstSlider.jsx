import React from 'react'
import "./FirstSlider.modules.css"
import { Box, Image, Text } from '@chakra-ui/react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { SecondSlide } from '../Data/Dummy';
import { settings4 } from '../Data/ResponsiveCard';

const FirstSlider = () => {

  return (
    <div>
        
        <Box className='MainSliderBox' height={{ base: "300px", sm: "300px", md: "450px", lg: "500px" }} mt="130px">
        <Slider {...settings4}>
                    {SecondSlide.map((ele, index) => (
                        <Box
                            key={index}
                        >
                            <Box className='mainDiv' height={{ base: "300px", sm: "300px", md: "450px", lg: "500px" }}>

                                 <Image borderRadius={"20px"} w="100%" h="100%" src={ele.image}/>
                            </Box>

                           

                        </Box>
                    ))}
                </Slider>

        </Box>
    </div>
  )
}

export default FirstSlider