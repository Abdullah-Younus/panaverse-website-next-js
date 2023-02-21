import React from 'react';
import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import Image from 'next/image';

function Main() {
    return (
        <>
            {/******** Start first section  */}
            <Box h="800px" bgImage={"/assets/images/banner/bg.png"} bgRepeat="no-repeat" bgSize="cover" bgPosition="center">
                <Box width={"container.xl"} className='text-white' margin={"0 auto"}>
                    <HStack className=''>
                        <Box className='mt-32 '>
                            <Heading marginBottom={'5'} as={'h1'} fontSize={"calc(1.53125rem + 3.375vw)"} textTransform={"uppercase"} lineHeight={"1.25"} fontWeight={"500"} fontFamily={"Rajdhani,sans-serif"}>
                                WEB 3.0
                                <br />
                                Launchpad
                                <br />
                                for IDO & INO
                            </Heading>
                            <p style={{ fontSize: "1.125rem", color: "white", maxInlineSize: "60ch" }}>
                                The next generation gaming ecosystem for IDO and INO launchpad web 3.0 platform
                            </p>
                            <Button
                                borderRadius={"5px"}
                                transform={"skew(-5deg)"}
                                marginTop={"30px"}
                                textDecoration={"none"}
                                fontFamily={"Rajdhani, sans-serif"}
                                color={"black"}
                                transformOrigin={"right"}
                                transition={"all 0.3s ease"}
                                backgroundColor={"#28DBD1"}
                                border={"1px solid transparent"}
                                fontWeight={"600"}
                            >
                                ExplorelDO
                            </Button>
                        </Box>
                        <Box className='w-3/6 mt-32'>
                            <Image className='mx-52 mt-32' width={350} height={100} src="/assets/images/banner/banner-thumb/rocketImage.png" alt="animation" />
                        </Box>
                    </HStack>
                </Box>

            </Box>
            {/******** End first section  */}

            {/* start second section  */}
            <Box className=' bg-[#02121D] w-full text-[#C1C7CB] block pb-32 pt-10'>
                <Box width={"container.xl"} className='text-white ' margin={"0 auto"}>
                    <HStack>
                        <Box backgroundImage={'/assets/images/project/header.png'} width={"440px"} height={"200px"} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} >
                            <p style={{ fontSize: "20px", textTransform: "capitalize", fontWeight: "500", color: "#28DBD1", maxInlineSize: "60ch", fontFamily: 'Rajdhani, sans-serif', marginTop: '', display: 'inline-block', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
                                Trending
                            </p>
                            <Heading as={'h2'} lineHeight={"1.10"} display={'block'} fontSize={'calc(1.4rem + 1.8vw)'} fontFamily={'Rajdhani,sans-serif'} color={"#ffffff"} fontWeight={'700'} marginTop={''} marginBottom={'0.5rem'}>
                                Most Popular IDO
                                <br />
                                Projects
                            </Heading>
                            <p style={{ marginTop: '0', marginBottom: '1rem', color: '#C1C7CB', fontSize: '1rem', lineHeight: '1.625', fontFamily: "Roboto, sans-serif" }}>
                                Lorem ipsum dolor sit, amet consectetur
                                <br />
                                adipisicing elit. Cum, quod?
                            </p>

                            {/* <Button
                                borderRadius={"5px"}
                                transform={"skew(-5deg)"}
                                marginTop={"30px"}
                                textDecoration={"none"}
                                fontFamily={"Rajdhani, sans-serif"}
                                color={"black"}
                                transformOrigin={"right"}
                                transition={"all 0.3s ease"}
                                backgroundColor={"#28DBD1"}
                                border={"1px solid transparent"}
                                fontWeight={"600"}
                            >
                                ExplorelDO
                            </Button> */}
                        </Box>
                        <Box className='w-2/3 flex justify-start box-border'>
                            <Box className='w-80 shadow-lg rounded-lg mx-12 inline-block'>
                                <Image src={"/assets/images/igo/item/bg.jpg"} alt={"item-image"} width={400} height={400} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
                                <Box className='inline-block rounded-lg h-64 w-80 bg-[#0a1f2fcf]'>
                                    <Box className='w-60 mx-10 m-10 border inline-block'>
                                        <HStack>
                                            <p>Round Name:</p>
                                            <p className='text-[#28DBD1]'>42</p>
                                        </HStack>
                                        <HStack>
                                            <p>Round Name:</p>
                                            <p className='text-[#28DBD1]'>TBA</p>
                                        </HStack>
                                        <HStack>
                                            <p>Round Name:</p>
                                            <p className='text-[#28DBD1]'>TBA</p>
                                        </HStack>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='w-80 shadow-lg rounded-xl mx-10 inline-block'>
                                <Image src={"/assets/images/igo/item/bgs.jpg"} alt={"item-image"} width={400} height={400} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
                                <Box className='inline-block h-64 rounded-lg w-80 bg-[#0a1f2fcf]'>
                                    <span>Check</span>
                                </Box>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </Box>
            {/* end second section  */}

        </>

    )
}

export default Main;