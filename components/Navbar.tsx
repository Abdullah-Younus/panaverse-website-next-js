"use client";
import { Box, HStack, UnorderedList, ListItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true)
    }
    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    return (
        <header>
            <Box width={"100wh"} height={"20"} bg={"#0A1F2F"} className="flex justify-between">
                <Box width={"container.xl"} height={"20"} bg={"#0A1F2F"} margin={'0 auto'}>
                    <HStack className='flex justify-between'>
                        <Image src={"/assets/images/logo/logo.png"} alt="logo" width={150} height={55} style={{ borderStyle: "none", verticalAlign: "middle", overflowClipMargin: "content-box", overflow: 'clip', paddingTop: '10px' }} />
                        <UnorderedList className='list-none flex  space-x-10 p-2 text-white font-semibold cursor-pointer'>
                            <ListItem>
                                <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                                    <MenuButton onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>HOME</MenuButton>
                                    <MenuList className='text-white'>
                                        <MenuItem className='text-black'>Option 1</MenuItem>
                                        <MenuItem className='text-black'>Option 2</MenuItem>
                                        <MenuItem className='text-black'>Option 3</MenuItem>
                                        <MenuItem className='text-black'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            </ListItem>
                            <ListItem>PROJECTS</ListItem>
                            <ListItem>STACKING</ListItem>
                            <ListItem>PAGES</ListItem>
                            <ListItem>BLOG</ListItem>
                            <ListItem>CONTACT</ListItem>
                        </UnorderedList>
                    </HStack>
                </Box>
            </Box>
        </header >
    )
}
