import React, { useState } from "react";
import {
    Box,
    IconButton,
    useDisclosure,
    VStack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
    FaUser,
    FaChartBar,
    FaGraduationCap,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SidebarComponent = ({ isSmall, setIsSmall, user_id, userType }) => {

    const { isOpen, onToggle } = useDisclosure();
    //const [isSmall, setIsSmall] = useState(false);
    const location = useLocation();
    console.log(location.pathname, "locationcheck")

    const toggleSidebar = () => {
        setIsSmall(!isSmall);
    };

    const iconColor = isSmall ? "white" : "black";
    const textColor = "black"; // Text color

    const iconSize = isSmall ? "25px" : "30px";
    const iconSizeBackBtn = isSmall ? "30px" : "40px";



    // Define page paths
    const profilePath = `/${userType}/studentprofile/${user_id}`;
    const dashboardPath = `/${userType}/studentdashboard/${user_id}`;
    const coursePath = `/${userType}/studentcourse/${user_id}`;
    const settingPath = `/${userType}/studentsetting/${user_id}`;

    // Determine if the student is on a specific page
    const isOnProfilePage = location.pathname === profilePath;
    const isOnDashboardPage = location.pathname === dashboardPath;
    const isOnCoursePage = location.pathname === coursePath;
    const isOnSettingPage = location.pathname === settingPath;

    return (
        <Box
            width={{ base: "20%", md: isSmall ? "100px" : "16%", lg: isSmall ? "100px" : "16%" }}
            height="100%"
            //bg="white"
            color={textColor}
            overflowX="hidden"
            position="fixed"
            top="0"
            left="0"
            transition="width 0.3s"
            mt="80px"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        >
            <IconButton
                icon={isSmall ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                size="md"
                h="auto"
                variant="unstyled"
                position="absolute"
                top="10px"
                right="10px"
                zIndex="1"
                fontSize={iconSizeBackBtn}
                onClick={toggleSidebar}
            // border="1px solid black" // Outline color of the toggle button
            />
            <VStack spacing={4} p={4} align="flex-start">
                <Link to={`/${userType}/studentprofile/${user_id}`}>
                    <Box
                        cursor="pointer"
                        _hover={{
                            bg: isSmall ? "cyan.400" : "cyan.400",
                            color: textColor,
                            //color: textColor,
                        }}
                        width={{ base: "50px", md: "80px", lg: isSmall ? "80px" : "180px", }} // Adjust width for sm and md screens
                        padding={{ base: "10px", md: "10px", lg: "10px" }} // Adjust padding for sm and md screens
                        mt="55px"

                        borderRadius={"10px"}
                        // border="1px solid black" // Outline color of the icon container
                        bg={isOnProfilePage ? "#25d366" : ""}
                    >
                        {isSmall ? (
                            <IconButton
                                icon={<FaUser />}
                                size="md"
                                variant="unstyled"
                                fontSize={iconSize}
                                cursor="pointer"
                                _hover={{
                                    color: iconColor,
                                }}
                                color={isOnProfilePage ? "white" : textColor}
                                ml={{ base: "", md: "15px", lg: "" }}
                            />
                        ) : (
                            <Box display={"flex"}>
                                <IconButton
                                    icon={<FaUser />}
                                    size="md"
                                    variant="unstyled"
                                    fontSize={iconSize}
                                    color={isOnProfilePage ? "white" : textColor}
                                    ml={{ base: "", md: "15px", lg: "" }}
                                />

                                <Text fontFamily={"sans-serif"} fontSize={"18px"} mt="8px" ml="3px"
                                    color={isOnProfilePage ? "white" : textColor}
                                    display={{ base: "none", md: "none", lg: "block" }} // Hide on sm and md screens, show on lg and larger screens
                                >
                                    User Profile
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Link>

                <Link to={`/${userType}/studentdashboard/${user_id}`}>
                    <Box
                        cursor="pointer"
                        _hover={{
                            bg: isSmall ? "cyan.400" : "cyan.400",
                            color: textColor,
                        }}
                        //width={isSmall ? "50px" : "180px"}
                        width={{ base: "50px", md: "80px", lg: isSmall ? "80px" : "180px", }} // Adjust width for sm and md screens

                        padding={{ base: "10px", md: "10px", lg: "10px" }} // Adjust padding for sm and md screens


                        borderRadius={"10px"}
                        // border="1px solid black" // Outline color of the icon container
                        bg={isOnDashboardPage ? "#25d366" : ""}

                    >
                        {isSmall ? (
                            <IconButton
                                icon={<FaChartBar />}
                                size="md"
                                variant="unstyled"
                                fontSize={iconSize}
                                cursor="pointer"
                                _hover={{
                                    color: iconColor,
                                }}
                                color={isOnDashboardPage ? "white" : textColor}
                                ml={{ base: "", md: "15px", lg: "" }}

                            />
                        ) : (
                            <Box display={"flex"}>
                                <IconButton
                                    icon={<FaChartBar />}
                                    size="md"
                                    variant="unstyled"
                                    fontSize={iconSize}
                                    color={isOnDashboardPage ? "white" : textColor}
                                    ml={{ base: "", md: "15px", lg: "" }}

                                />
                                <Text fontFamily={"sans-serif"} fontSize={"18px"} mt="8px" ml="3px"
                                    color={isOnDashboardPage ? "white" : textColor}
                                    display={{ base: "none", md: "none", lg: "block" }}
                                >
                                    Dashboard
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Link>

                <Link to={`/${userType}/studentcourse/${user_id}`}>
                    <Box
                        cursor="pointer"
                        _hover={{
                            bg: isSmall ? "cyan.400" : "cyan.400",

                            color: textColor,
                        }}
                        width={{ base: "50px", md: "80px", lg: isSmall ? "80px" : "180px", }} // Adjust width for sm and md screens

                        padding={{ base: "10px", md: "10px", lg: "10px" }} // Adjust padding for sm and md screens

                        borderRadius={"10px"}
                        bg={isOnCoursePage ? "#25d366" : ""}

                    // border="1px solid black" // Outline color of the icon container
                    >
                        {isSmall ? (
                            <IconButton
                                icon={<FaGraduationCap />}
                                size="md"
                                variant="unstyled"
                                fontSize={iconSize}
                                cursor="pointer"
                                _hover={{
                                    color: iconColor,
                                }}
                                color={isOnCoursePage ? "white" : textColor}
                                ml={{ base: "", md: "15px", lg: "" }}

                            />
                        ) : (
                            <Box display={"flex"}>
                                <IconButton
                                    icon={<FaGraduationCap />}
                                    size="md"
                                    variant="unstyled"
                                    fontSize={iconSize}
                                    color={isOnCoursePage ? "white" : textColor}
                                    ml={{ base: "", md: "15px", lg: "" }}
                                />
                                <Text fontFamily={"sans-serif"} fontSize={"18px"} mt="8px" ml="3px"
                                    color={isOnCoursePage ? "white" : textColor}
                                    display={{ base: "none", md: "none", lg: "block" }}
                                >
                                    Course
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Link>

                <Link to={`/${userType}/studentsetting/${user_id}`}>
                    <Box
                        cursor="pointer"
                        _hover={{
                            bg: isSmall ? "cyan.400" : "cyan.400",

                            color: textColor,
                        }}
                        // width={isSmall ? "50px" : "180px"}
                        // padding={"10px"}
                        width={{ base: "50px", md: "80px", lg: isSmall ? "80px" : "180px", }} // Adjust width for sm and md screens

                        padding={{ base: "10px", md: "10px", lg: "10px" }} // Adjust padding for sm and md screens

                        borderRadius={"10px"}
                        bg={isOnSettingPage ? "#25d366" : ""}

                    // border="1px solid black" // Outline color of the icon container
                    >
                        {isSmall ? (
                            <IconButton
                                icon={<FaCog />}
                                size="md"
                                variant="unstyled"
                                fontSize={iconSize}
                                cursor="pointer"
                                _hover={{
                                    color: iconColor,
                                }}
                                color={isOnSettingPage ? "white" : textColor}
                                ml={{ base: "", md: "15px", lg: "" }}

                            />

                        ) : (
                            <Box display={"flex"}>
                                <IconButton
                                    icon={<FaCog />}
                                    size="md"
                                    variant="unstyled"
                                    fontSize={iconSize}
                                    color={isOnSettingPage ? "white" : textColor}
                                    ml={{ base: "", md: "15px", lg: "" }}

                                />
                                <Text fontFamily={"sans-serif"} fontSize={"18px"} mt="8px" ml="3px"
                                    color={isOnSettingPage ? "white" : textColor}
                                    display={{ base: "none", md: "none", lg: "block" }}
                                >
                                    Setting
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Link>

                <Box
                    cursor="pointer"
                    _hover={{
                        bg: isSmall ? "cyan.400" : "cyan.400",

                        color: textColor,
                    }}
                    // width={isSmall ? "100px" : "180px"}
                    // padding={"10px"}
                    width={{ base: "50px", md: "80px", lg: isSmall ? "80px" : "180px", }} // Adjust width for sm and md screens

                    padding={{ base: "10px", md: "10px", lg: "10px" }} // Adjust padding for sm and md screens

                    borderRadius={"10px"}
                // border="1px solid black" // Outline color of the icon container
                >
                    {isSmall ? (
                        <IconButton
                            icon={<FaSignOutAlt />}
                            size="md"
                            variant="unstyled"
                            fontSize={iconSize}
                            cursor="pointer"
                            _hover={{
                                color: iconColor,
                            }}
                            ml={{ base: "", md: "15px", lg: "" }}
                        />
                    ) : (
                        <Box display={"flex"}>
                            <IconButton
                                icon={<FaSignOutAlt />}
                                size="md"
                                variant="unstyled"
                                fontSize={iconSize}
                                color={iconColor}
                                ml={{ base: "", md: "15px", lg: "" }}
                            />
                            <Text fontFamily={"sans-serif"} fontSize={"18px"} mt="8px" ml="3px"
                                color={textColor}
                                display={{ base: "none", md: "none", lg: "block" }}

                            >
                                Logout
                            </Text>
                        </Box>
                    )}
                </Box>


                {/* Repeat the pattern for other icons and their names */}
            </VStack>
        </Box>
    );
};

export default SidebarComponent;
