'use client'

// import { Link } from "react-router-dom";

import React, { ReactNode } from "react";
import { colors } from './config';

import {
    Box,
    Flex,
    Avatar,
    Text,
    IconButton,
    Button,
    Menu,
    useDisclosure,
    Stack,
    Link,
    TextProps
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props extends TextProps {
    children: ReactNode;
    destination?: string
}

const Links = ['Home', 'About', 'Settings', 'Profile']

const MenuItem = ({ children, destination = "/", ...rest }: Props) => {
    return (
        <Link href={destination}>
            <Text display="block" {...rest}>
            {children}
            </Text>
        </Link>
    )
}

const Navbar: React.FC = () => {
    return (
        <Box paddingInline="8" bg={colors.secondary} width="100vw" position="fixed" left="0" top="0">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Box fontWeight={"bold"} color={colors.tertiary}>Logo</Box>

                {/* Links */}
                <Stack direction="row">
                    {Links.map( (link) => (
                        <MenuItem
                        key = {link}
                        children = {link}
                        destination = {`/${link.toLowerCase()}`}
                        color = {colors.primary}
                        _hover={{ color: colors.tertiary}}
                        paddingInline={8}
                        ></MenuItem>
                    ))}
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;