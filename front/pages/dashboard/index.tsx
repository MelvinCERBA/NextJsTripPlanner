import MainLayout from '../../components/MainLayout'
import SP from '../../components/SpecialSpace'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MiniCryptoCard from '../../components/MiniCryptoCard';

const Dashboard = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([])
  const [flux, setFlux] = useState([])

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  async function updateCurrencies() {
    const { data } = await axios.get(`http://localhost:8081/profile?username=${localStorage.getItem('username')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const tmp = shuffle(data.data.user.currencies)
    
    setCryptoCurrencies(tmp.slice(0, 2));
  }

  async function updateFlux() {
    const { data } = await axios.get(`http://localhost:8081/profile?username=${localStorage.getItem('username')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const tmp = shuffle(data.data.user.flux)
    
    setFlux(tmp.slice(0, 2));
  }
  

  useEffect(() => {
    (async () => {
      await updateCurrencies()
      await updateFlux()
    })()
  }, [])

  return (
    <MainLayout title="Dashboard" description="Your personnal dashboard" loggedPage>
      <div>
        <div className='flex justify-center'>
          <div className='max-w-3xl'>
            <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>List <SP /> of <SP /> Dashboard</h1>
            <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Keep a permanent view on the trends of the moment and do not let yourself be surprised but instead surprise !</h2>
          </div>
        </div>
        <div>
          <h1 className='my-5 text-4xl text-left font-h1 text-red-light dark:text-red-dark'>Cryptocurrencies</h1>
          <div>
            {cryptoCurrencies.length !== 0 &&
              <div className='grid 2xl:grid-cols-2 2xl:gap-8 sm:grid-cols-1 sm:gap-4 py-5 justify-between hover:justify-around transition-all'>
                {cryptoCurrencies.map((value, index) => {
                  return <MiniCryptoCard currency={value} key={index} token/>
                })}
              </div>
            }
            {!cryptoCurrencies.length &&
              <h3 className='text-center text-black-light dark:text-white-light'>You don&apos;t have any currencies. Please add one with the search bar below</h3>
            }
          </div>
        </div>
        <div>
          <h1 className='my-5 text-4xl text-left font-h1 text-red-light dark:text-red-dark'>News</h1>
          <div>
            
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard;