import MainLayout from '../../components/MainLayout'
import SP from '../../components/SpecialSpace'
import MiniCryptoCard from '../../components/MiniCryptoCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoStats = () => {
  const [cryptoCurrencies, setCrytpoCurrencies] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8081/crypto/authorized")
      
      setCrytpoCurrencies(data.data.message)
    })()
  }, [])

  return (

    <MainLayout title="Crypto Stats" description="Cryptomoneys Statistics">
      <div id='checkout' className='flex justify-center'>
        <div className='max-w-3xl'>
          <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>List <SP /> of <SP /> Cryptocurrencies</h1>
          <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Keep a permanent view on the trends of the moment and do not let yourself be surprised but instead surprise !</h2>
        </div>
      </div>
      <div className='grid 2xl:grid-cols-2 2xl:gap-8 sm:grid-cols-1 sm:gap-4 py-5 justify-between hover:justify-around transition-all'>
        {cryptoCurrencies.map((value, index) => {
          return <MiniCryptoCard currency={value} key={index} />
        })}
      </div>
    </MainLayout>
  )
}

export default CryptoStats;