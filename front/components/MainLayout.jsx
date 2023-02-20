import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import LinearProgress from '@mui/material/LinearProgress';

const MainLayout = ({children, title, description, loggedPage = false}) => {
  const [theme, setTheme] = useState('dark')
  const [loadPage, setLoadPage] = useState(false)
  
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
    else {
      setTheme(localStorage.getItem('theme'))
    }
  }, [])

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar theme={theme} setTheme={setTheme} setLoadPage={setLoadPage} loggedPage={loggedPage} />
      { loadPage && <LinearProgress />}

      <main className='bg-white-light dark:bg-black-dark min-h-screen transition-all duration-1000'>
        <div className='container'>
          { children }
        </div>
      </main>

      <footer className='bg-white-light dark:bg-black-dark flex justify-center transition-all duration-1000'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MainLayout;