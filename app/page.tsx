"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '@/components/Main';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Main />
    </ChakraProvider>
  )
}
