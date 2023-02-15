"use client";
import { Box, HStack, UnorderedList, ListItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');

    const handleMenuOpen = (menuItem: React.SetStateAction<string>) => {
        setSelectedMenuItem(menuItem);
        setIsMenuOpen(true);
        setIsMouseOver(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        setIsMouseOver(false);
        setSelectedMenuItem('');
    };

    const handleMenuItemClick = (menuItem: string) => {
        // Perform some action based on the selected menu item
        console.log(`You clicked on "${menuItem}"`);
        handleMenuClose();
    };


    return (
        <header>
            <Box width={"100wh"} height={"20"} bg={"#0A1F2F"} className="flex justify-between">
                <Box width={"container.xl"} height={"20"} bg={"#0A1F2F"} margin={'0 auto'}>
                    <HStack className='flex justify-between'>
                        <Image src={"/assets/images/logo/logo.png"} alt="logo" width={150} height={55} style={{ borderStyle: "none", verticalAlign: "middle", overflowClipMargin: "content-box", overflow: 'clip', paddingTop: '10px' }} />
                        <UnorderedList className='list-none flex space-x-10 p-2 text-white font-semibold cursor-pointer'>
                            <ListItem>
                                <Menu isOpen={isMenuOpen} onClose={handleMenuClose}>
                                    <MenuButton onMouseEnter={() => handleMenuOpen('HOME')} onMouseLeave={handleMenuClose}>HOME</MenuButton>
                                    {isMouseOver && selectedMenuItem === 'HOME' && (
                                        <MenuList className='text-white' onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                                            <MenuItem className='text-black' onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
                                            <MenuItem className='text-black' onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
                                            <MenuItem className='text-black' onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
                                            <MenuItem className='text-black' onClick={() => handleMenuItemClick('Option 4')}>Option 4</MenuItem>
                                        </MenuList>
                                    )}
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
