import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/MainLayout'
import SP from '../components/SpecialSpace'
import COMButton from '../components/COMButton'
import MiniCryptoCard from '../components/MiniCryptoCard'
import { useState, useEffect } from 'react'
import axios from 'axios';

export async function getServerSideProps(ctx) {
  const { data } = await axios.get("http://localhost:8081/crypto/authorized")

  return {
    props: {
      cryptoCurrency: data.data.message[Math.floor(Math.random() * data.data.message.length)]
    }
  }
}

const Home = ({ cryptoCurrency}) => {

  return (
    <MainLayout title="Home" description="Homepage of Count Of Money Website">
      <div>
        <div className='flex flex-row py-20'>
          <div className='basis-1/2'>
            <h1 className='my-5 text-6xl font-h1 text-black-light dark:text-red-dark'>Welcome <SP /> to <SP /> our <SP /> website</h1>
            <h2 className='my-5 text-2xl font-h2 text-black-light dark:text-slate-dark'>Count of money, an app to always be up to date about cryptocurrencies</h2>
            <COMButton className="m-2" href="/crypto-stats">Find out more</COMButton>
          </div>
          <div className='basis-1/2 flex justify-center'>
            <Image src="/light/svg/logo-no-background.svg" width={300} height={300} alt="COM Logo" />
          </div>
        </div>
        <div id='checkout' className='py-20 flex justify-center'>
          <div className='max-w-3xl'>
            <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>C <SP /> - <SP /> Checkout</h1>
            <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Keep a permanent view on the trends of the moment and do not let yourself be surprised but instead surprise !</h2>
            <MiniCryptoCard currency={cryptoCurrency} />
          </div>
        </div>
        <div id='overview' className='py-20 flex justify-center'>
          <div className='max-w-3xl'>
            <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>O <SP /> - <SP /> Overview</h1>
            <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Thanks to our RSS feeds, follow the various cryptocurrency news that interests you to be sure to know where to invest !</h2>
          </div>
        </div>
        <div id='master' className='py-20 flex justify-center'>
          <div className='max-w-3xl'>
            <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>M <SP /> - <SP /> Master</h1>
            <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>With our solution, you can master trading and to help you, pair C.o.M with your Binance account</h2>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;