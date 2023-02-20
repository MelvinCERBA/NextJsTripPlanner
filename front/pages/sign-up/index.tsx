import { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout'
import SP from '../../components/SpecialSpace';
import COMButton from '../../components/COMButton'
import Link from 'next/link';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setC_Password] = useState('')

  const [backdrop, setBackdrop] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [message, setMessage] = useState('Error: unknown')

  const router = useRouter();
  

  useEffect(() => {
    (async () => {
      if (true) {
        try {
          const { data } = await axios.get(`http://0.0.0.0:8081/callback?code=${router.query.code}`,)
          console.log(data.data);

          localStorage.setItem('token', data.data.token.raw)
          localStorage.setItem('username', data.data.token.username)
          window.location = "/dashboard" as (Location & string);
        } catch (error) {
        
        }
      }
    })()
  }, [router]);

  const tryToSignUpSpotify = async () => {
    try {
      const { data } = await axios.get('http://localhost:8081/spotify/login');

      console.log(data);

      window.location = data.data.message;

    } catch (error) {
      true
    }
  }

  const tryToSignUp = async () => {
    setBackdrop(true)

    if (!username && !email && !password && !c_password) {
      setBackdrop(false)
      setSnackbar(true)
      setMessage('Please you must fill all this fields')
      setSeverity('error')
      return
    }

    if (c_password !== password) {
      setBackdrop(false)
      setSnackbar(true)
      setMessage('Please make sure to confirm correctly your password')
      setSeverity('error')
      return
    }

    try {
      const { data } = await axios.post("http://localhost:8081/register", {
        email,
        username,
        password
      })
  
      localStorage.setItem('token', data.data.token.raw)
      localStorage.setItem('username', username)

      setBackdrop(false)
      setSnackbar(true)
      setMessage("Your account is now registred. Welcome !")
      setSeverity('success')

      setTimeout(() => {
        Router.push({pathname: '/dashboard'})        
      }, 2000)
    } catch (error) {
      setBackdrop(false)
      setSnackbar(true)
      setMessage('An error has occurred...')
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
    <MainLayout title="Sign Up" description="Sign up to CoM">
      <div className='py-5 flex justify-center'>
        <div className='max-w-3xl'>
          <h1 className='my-5 text-6xl font-h1 text-center text-red-light dark:text-red-dark'>Sign <SP /> Up</h1>
          <h2 className='my-5 text-2xl font-h2 text-center text-black-light dark:text-slate-dark'>Please complete the fields below to create an account</h2>
          <div className='my-20 font-h3 text-2xl text-black-light dark:text-white-light tracking-wider'>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="username">Username :</label>
              <input onChange={(ev) => setUsername(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="text" name='username' placeholder='Click here to write' />
            </div>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="email">Email :</label>
              <input onChange={(ev) => setEmail(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="text" name='username' placeholder='Click here to write' />
            </div>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="password">Password :</label>
              <input onChange={(ev) => setPassword(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="password" name='username' placeholder='Click here to write' />
            </div>
            <div className='my-4 flex flex-row'>
              <label className='mx-5 text-right basis-1/3' htmlFor="c_password">Confirmation :</label>
              <input onChange={(ev) => setC_Password(ev.target.value)} className='px-3 basis-2/3 bg-transparent focus:outline-none' type="password" name='username' placeholder='Click here to write' />
            </div>
          </div>
          <div className='flex justify-center my-10'>
            <button onClick={tryToSignUpSpotify} className='bg-[#222222] p-2 rounded-xl'>
              <Image src="/binance.jpeg" width={100} height={50} alt="Binance logo" />
            </button>
          </div>
          <div className='flex justify-center'>
            <COMButton onClick={tryToSignUp}>Let&apos;s start to earn more</COMButton>
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

export default SignUp;