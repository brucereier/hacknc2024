'use client'

import { Link as RouterLink } from 'react-router-dom'; // Import from react-router-dom
import React, { ReactNode } from 'react';
import { colors } from './config';
import {
    Box,
    Flex,
    Text,
    Stack,
    TextProps
} from '@chakra-ui/react';

interface Props extends TextProps {
    children: ReactNode;
    destination?: string;
}

const Links = ['About', 'Settings', 'Profile'];

const MenuItem = ({ children, destination = '/', ...rest }: Props) => {
    return (
        <RouterLink to={destination}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </RouterLink>
    );
};

const Navbar: React.FC = () => {
    return (
        <Box paddingInline="8" bg={colors.secondary} width="100%" left="0" top="0">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Box fontWeight="bold" color={colors.tertiary}>Logo</Box>

                {/* Links */}
                <Stack direction="row">
                    {Links.map((link) => (
                        <MenuItem
                            key={link}
                            children={link}
                            destination={`/${link.toLowerCase()}`}
                            color={colors.primary}
                            _hover={{ color: colors.tertiary }}
                            paddingInline={8}
                        />
                    ))}
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;