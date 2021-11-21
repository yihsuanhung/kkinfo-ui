import Head from 'next/head'
// import { Button } from '@chakra-ui/react'
import Button from '../components/button'
import Header from '../components/header'
export default function Home() {
  return (
    <>
      <Head>
        <title>庫庫資訊</title>
      </Head>
      <Header />
      <Button />
      {/* <Button colorScheme="blue">Button</Button> */}
    </>
  )
}
