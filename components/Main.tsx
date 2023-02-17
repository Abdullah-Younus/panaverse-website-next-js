import React from 'react';
import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import Image from 'next/image';

function Main() {
    return (
        <>
            {/******** Start first section  */}
            <Box h="1000px" bgImage={"/assets/images/banner/bg.png"} bgRepeat="no-repeat" bgSize="cover" bgPosition="center">
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
            <Box className='border w-full h-80'>

            </Box>
            {/* end second section  */}

        </>

    )
}

export default Main;