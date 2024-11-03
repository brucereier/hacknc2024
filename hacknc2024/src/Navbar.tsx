'use client'

// import { Link } from "react-router-dom";

import React, { ReactNode } from "react";
import { colors } from './config';
import { Avatar } from "./components/ui/avatar"


import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Menu,
    useDisclosure,
    Stack,
    Link,
    TextProps,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props extends TextProps {
    children: ReactNode;
    destination?: string
}

const Links = ['Home', 'About', 'Settings']

const MenuItem = ({ children, destination = "/", ...rest }: Props) => {
    return (
        <Link href={destination}>
            <Text display="block" textStyle="lg" fontWeight="semibold" {...rest}>
            {children}
            </Text>
        </Link>
    )
}

const Navbar: React.FC = () => {
    return (
        <Box paddingInline="8" paddingY="4" bg={colors.primary} width="100%" left="0" top="0" zIndex={1000}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Box>
                    <img src="/logo_isolated.png"></img>
                </Box>

                {/* Links */}
                <Stack direction="row">
                    {Links.map( (link) => (
                        <MenuItem
                        key = {link}
                        children = {link}
                        destination = {`/${link.toLowerCase()}`}
                        color = {colors.secondary}
                        _hover={{ color: colors.tertiary}}
                        paddingInline={8}
                        ></MenuItem>
                    ))}

                    <Avatar name="Abel Lu" src={'/logo_isolated.png'} />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;
