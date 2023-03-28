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
// import { displayFormsContextWrapper } from '@/contexts/displayFormsContext';
// import { displayFormsContext } from '@/contexts/displayFormsContext';


export default function Home() {
  // Can be null (no form displayed), 'log' or 'sign'
  const [displayForms, setDisplayForms] = useState('none');
  // console.log('home : type of setDisplayForms');
  // console.log(typeof setDisplayForms);

  return (
    <displayFormsContext.Provider value={{displayForms, setDisplayForms}}>
      <div className="flex h-screen w-screen">
        <SideBar className="flex lg:basis-5/12 w-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0"/>
        <Map className="basis-7/12 hidden lg:flex lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1"/> 
      </div>
      { displayForms == 'log' && (
          <LogInForm></LogInForm>
        ) 
      }
      { displayForms == 'sign' && (
          <SignInForm></SignInForm>
        )

      }
    </displayFormsContext.Provider>
  )
}
