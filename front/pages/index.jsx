import { LogInForm } from '@/components';
import { SignInForm } from '@/components';
import { type } from 'os';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Layout } from '../components';
import { Button } from '../components';
import { NavBar } from '../components/';
import { Map } from '../components/';
import { SideBar } from '../components/';
import { joinClasses } from '@/commands';
// import { displayFormsContextWrapper } from '@/contexts/displayFormsContext';
// import { displayFormsContext } from '@/contexts/displayFormsContext';

// export const displayFormsContext = createContext(null);

export default function Home() {
  const [displayMap, setDisplayMap]     = useState(false);
  const [displayForm, setDisplayForm]   = useState('');

  return (
    <>
      <div className="flex h-screen w-screen">
        <div className={`${displayMap ? "hidden lg:flex" : "flex"} flex-col lg:basis-5/12 w-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0`}>
          <NavBar setDisplayForm={setDisplayForm}/> 
          <SideBar displayMap={displayMap} setDisplayMap={setDisplayMap}/>
        </div>
        <Map displayMap={displayMap} setDisplayMap={setDisplayMap} className={`${displayMap ? "flex" : "hidden lg:flex"} basis-7/12 hidden lg:flex lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1`}/> 
      </div>
      { displayForm == 'log' && (<LogInForm setDisplayForm={setDisplayForm}/>) }
      { displayForm == 'sign' && (<SignInForm setDisplayForm={setDisplayForm}/>) }
    </>
  )
}
