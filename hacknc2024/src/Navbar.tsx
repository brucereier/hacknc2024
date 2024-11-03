'use client'

// import { Link } from "react-router-dom";

import React, { ReactNode } from "react";
import { colors } from './config';
import { Avatar } from "./components/ui/avatar"


import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Link,
} from '@chakra-ui/react'

const Navbar: React.FC = () => {
    return (
        <Box paddingInline="8" paddingY="4" bg={colors.primary} width="100%" left="0" top="0" zIndex={1000}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Link href="/">
                    <Stack direction="row">
                        <Box>
                            <img src="/logo_isolated.png"></img>
                        </Box>
                    </Stack>

                    <Box fontFamily="Audiowide" fontSize={37} alignContent={"center"} color="gray.100">
                        Astraloq
                    </Box>
                </Link>

                {/* Links */}
                <Stack direction="row">
                    <Box paddingInline={8} alignContent="center">
                        <Link href={"/about"}>
                            <Button textStyle="lg" color={"gray.300"} _hover={{borderColor: "#F099E4", color: "#F099E4"}}>
                                About
                            </Button>
                        </Link>
                    </Box>

                    <Link href={`/profile/1`} alignContent="center">
                        <Avatar size="xl" name="Abel Lu" />
                    </Link>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;
