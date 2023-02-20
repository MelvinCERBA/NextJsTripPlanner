import MainLayout from '../../../components/MainLayout'
import SP from '../../../components/SpecialSpace'
import MiniCryptoCard from '../../../components/MiniCryptoCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import COMButton from '../../../components/COMButton';
import moment from 'moment';
import { Alert, AlertColor, Backdrop, Box, CircularProgress, Modal, Snackbar } from '@mui/material';

const CryptoStatsMe = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([])
  const [currency, setCurrency] = useState('')

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [backdrop, setBackdrop] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [message, setMessage] = useState('')

  async function updateCurrencies() {
    const { data } = await axios.get(`http://localhost:8081/profile?username=${localStorage.getItem('username')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    console.log(data.data.user);
    
    setCryptoCurrencies(data.data.user.currencies);
  }

  useEffect(() => {
    (async () => {
      await updateCurrencies()
    })()
  }, [])

  async function searchForDevise() {
    setBackdrop(true);
    try {
      const { data } = await axios.post("http://localhost:8081/crypto/historic", {
        currencies: [`${currency}-USD`],
        date: moment().format("YYYY-MM-DD") + "-00-00"
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
  
      if (data.data.refused.length !== 0) {
        throw new Error("Does'nt exists");
      }

      handleOpen()
    } catch (error) {
      setMessage("The cryptocurrency you requested does not exist in our database")
      setSeverity("error")
      setSnackbar(true)
    }
    setBackdrop(false);
  }
  
  async function addCurrency() {
    setModalOpen(false)
    setBackdrop(true);

    try {
      const { data } = await axios.post("http://localhost:8081/crypto/follow", {
        currency: `${currency}-USD`,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      console.log(data);
      
      await updateCurrencies()
      setSeverity("success")
      setMessage("The currency has been added successfully !")
      setSnackbar(true)
    } catch (error) {
      setSeverity("error")
      setMessage("Sorry. There is an error")
      setSnackbar(true)
    }
    setBackdrop(false);
  }

  async function removeCurrency(curr: string) {
    console.log(curr);
    
    setModalOpen(false)
    setBackdrop(true);

    try {
      const { data } = await axios.post("http://localhost:8081/crypto/unfollow", {
        currency: curr,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      console.log(data);
      
      await updateCurrencies()
      setSeverity("success")
      setMessage("The currency has been deleted successfully !")
      setSnackbar(true)
    } catch (error) {
      setSeverity("error")
      setMessage("Sorry. There is an error")
      setSnackbar(true)
    }
    setBackdrop(false);
  }

  return (

    <MainLayout title="Crypto Stats" description="Cryptomoneys Statistics" loggedPage>
      <div id='checkout' className='flex justify-center'>
        <div className='max-w-3xl'>
          <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>Crypto <SP /> Stats</h1>
          <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Keep a permanent view on the trends of the moment and do not let yourself be surprised but instead surprise !</h2>
        </div>
      </div>
      <div>
          <h2 className='my-5 text-xl text-center font-h2 text-black-light dark:text-slate-dark'>Thanks to this search bar, You can add any cryptocurrency to your profile</h2>
          <div className='my-4 flex justify-center text-2xl'>
            <input onChange={(ev) => setCurrency(ev.target.value.toUpperCase())} className='px-3 uppercase text-center text-black-light dark:text-white-light tracking-wider bg-transparent focus:outline-none' type="text" name='currency' placeholder='Enter currency' />
            <COMButton onClick={searchForDevise}>Search</COMButton>
          </div>
      </div>
      <div className='py-10'>
        <h1 className='my-5 text-4xl font-h1 text-red-light dark:text-red-dark'>Your <SP /> Cryptocurrencies</h1>
        {cryptoCurrencies.length !== 0 &&
          <div className='grid 2xl:grid-cols-2 2xl:gap-8 sm:grid-cols-1 sm:gap-4 py-5 justify-between hover:justify-around transition-all'>
            {cryptoCurrencies.map((value, index) => {
              return <MiniCryptoCard currency={value} key={index} deletable token deleteHandler={() => removeCurrency(cryptoCurrencies[index])}/>
            })}
          </div>
        }
        {!cryptoCurrencies.length &&
          <h3 className='text-center text-black-light dark:text-white-light'>You don&apos;t have any currencies. Please add one with the search bar below</h3>
        }
      </div>

      <div className='flex justify-center'>
        <Modal
          open={modalOpen}
          onClose={handleClose}
        >
        <Box className="p-10 my-10 mx-32 bg-blue-900/80 rounded-md text-center text-black-light dark:text-white">
          <h1 className='font-h1 text-white m-3'>Good <SP /> News !</h1>
          <h2 className='font-h2 text-white m-2'>Your currency stats</h2>
          <div className='grid'>
            <MiniCryptoCard token mode='preview' currency={`${currency}-USD`} />
            <COMButton className='m-3' onClick={addCurrency}>Add this currency</COMButton>
          </div>
          </Box>
        </Modal>
      </div>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
        onClick={() => {setBackdrop(false)}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={snackbar}
        onClose={() => {setSnackbar(false)}}
      >
        <Alert severity={severity as AlertColor} className="font-h3">{ message }</Alert>
      </Snackbar>
    </MainLayout>
  )
}

export default CryptoStatsMe;