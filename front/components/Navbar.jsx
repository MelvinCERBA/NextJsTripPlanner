import Container from 'react-bootstrap/Container';
import { Navbar as Nv }  from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import SP from './SpecialSpace'
import NLModeToggler from './NightModeToggler';
import Link from 'next/link';
import Router from 'next/router'
import Image from 'next/image';

const Navbar = ({ theme, setTheme, setLoadPage, loggedPage }) => {
  
  function tryToLogout() {
    setLoadPageOnTrue()
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    Router.push({ pathname: '/' })
  }

  const setLoadPageOnTrue = () => {
    setLoadPage(true)
  }

  if (!loggedPage && (typeof window === "undefined" || !localStorage.getItem('token'))) {

    return (
      <>
        <Nv bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
          <Container>
            <Nv.Brand className='font-h1 hover:py-3 transition-all duration-500' onClick={setLoadPageOnTrue}>
              <Link href="/">
                <Image src="/logo.svg" className='rounded-lg inline' width={40} height={40} alt="Brand" />
                <SP />
                <span className='text-3xl align-middle text-white no-underline'>
                  CoM
                </span>
              </Link>
            </Nv.Brand>
            <Nv.Toggle />
            <Nv.Collapse>
            <Nav className="me-auto text-xl hover:py-3 transition-all duration-500">
              <Link href="/crypto-stats" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Crypto Stats
              </Link>
              <Link href="/trading-news" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Trading News
              </Link>
              <Link href="/sign-in" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Sign in
              </Link>
            </Nav>
              <Nav className="justify-content-end justify-center hover:py-3 transition-all duration-500">
                <Nav.Link href='/sign-up'>
                  <button className='rounded-xl text-xl font-h2 text-red-light px-3 py-2 shadow-xl lg:mx-5 bg-white-light hover:bg-red-light hover:text-white-light hover:text-2xl transition-all duration-500' onClick={setLoadPageOnTrue}>
                    Join us
                  </button>
                </Nav.Link>
              </Nav>
            </Nv.Collapse>
            <NLModeToggler theme={theme} setTheme={setTheme} />
          </Container>
        </Nv>
      </>
    )
  }
  else {
    return (
      <>
        <Nv bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
          <Container>
            <Nv.Brand className='font-h1 hover:py-3 transition-all duration-500'>
              <Link href="/dashboard">
                <Image src="/logo.svg" className='rounded-lg inline' width={40} height={40} alt="Brand" />
                <SP />
                <span className='text-3xl align-middle text-white no-underline'>
                  CoM
                </span>
              </Link>
            </Nv.Brand>
            <Nv.Toggle />
            <Nv.Collapse>
            <Nav className="me-auto text-xl hover:py-3 transition-all duration-500">
              <Link href="/crypto-stats/me" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Crypto Stats
              </Link>
              <Link href="/trading-news" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Trading News
              </Link>
              <Link href="/profile" className='font-h2 text-white-light mx-2 no-underline' onClick={setLoadPageOnTrue}>
                Profile
              </Link>
            </Nav>
              <Nav className="justify-content-end justify-center hover:py-3 transition-all duration-500">
                <button className='rounded-xl text-xl font-h2 text-red-light px-3 py-2 shadow-xl mx-5 bg-white-light hover:bg-red-light hover:text-white-light hover:text-2xl transition-all duration-500' onClick={tryToLogout}>
                  Sign out
                </button>
              </Nav>
            </Nv.Collapse>
            <NLModeToggler theme={theme} setTheme={setTheme} />
          </Container>
        </Nv>
      </>
    )
  }
}

export default Navbar;