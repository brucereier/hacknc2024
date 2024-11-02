'use client'

import {
    Box,
    Flex,
    Avatar,
    Text,
    IconButton,
    HStack,
    Button,
    Menu,
    MenuItem,
    useDisclosure,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'About', 'Settings', 'Profile']

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
            }}
            href='#'>
            {children}
        </Box>
    )
}

function Navbar(){
    return (
        <>
        </>
    )
}

export default Navbar;