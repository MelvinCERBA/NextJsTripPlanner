import { useState } from 'react';
import MainLayout from '../../components/MainLayout'
import SP from '../../components/SpecialSpace';
import COMButton from '../../components/COMButton'
import Link from 'next/link';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import axios from 'axios';
import Router from 'next/router'
import Image from 'next/image'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const email = null;

  const [backdrop, setBackdrop] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [message, setMessage] = useState('')

  const tryToSignIn = async () => {
    setBackdrop(true)

    try {
      const { data } = await axios.post("http://localhost:8081/login", {
        email,
        username,
        password
      })
  
      localStorage.setItem('token', data.data.token.raw)
      localStorage.setItem('username', username)

      setBackdrop(false)
      setSnackbar(true)
      setMessage('Login succesfull !')
      setSeverity('success')

      setTimeout(() => {
        Router.push({pathname: '/dashboard'})        
      }, 2000)
    } catch (error) {
      setBackdrop(false)
      setSnackbar(true)
      setMessage('Login unsuccesfull !')
      setSeverity('error')
    }
  }

  const tryToBinance = async () => {
    setBackdrop(true)

    setTimeout(() => {
      setBackdrop(false)
      setSnackbar(true)
    }, 3000)
  }

  return (
    <MainLayout title="Sign In" description="Sign up to CoM">
      <div className='py-5 flex justify-center'>
        <div className='max-w-3xl'>
          <h1 className='my-5 text-6xl font-h1 text-center text-red-light dark:text-red-dark'>Sign <SP /> In</h1>
          <h2 className='my-5 text-2xl font-h2 text-center text-black-light dark:text-slate-dark'>Please complete the fields below to log in</h2>
          <div className='my-20 font-h3 text-2xl text-black-light dark:text-white-light tracking-wider'>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="email">Username :</label>
              <input onChange={(ev) => setUsername(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="text" name='username' placeholder='Click here to write' />
            </div>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="password">Password :</label>
              <input onChange={(ev) => setPassword(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="password" name='username' placeholder='Click here to write' />
            </div>
          </div>
          <div className='flex justify-center my-10'>
            <button onClick={tryToBinance} className='bg-[#222222] p-2 rounded-xl'>
              <Image src="/binance.jpeg" width={100} height={50} alt="Binance logo" />
            </button>
          </div>
          <div className='flex justify-center'>
            <COMButton onClick={tryToSignIn}>Let&apos;s come back</COMButton>
          </div>
        </div>
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

export default SignIn;