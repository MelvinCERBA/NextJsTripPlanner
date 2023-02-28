import {Button} from '../Button'
import logo from '/public/logo-no-background.svg'
import { useContext } from 'react';
import { useEffect, useState } from 'react';

export function NavBar() {
    const [width, setWidth] = useState(0);;
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        }
      
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <div className="px-8 py-3 shadow-md max-h-full max-w-full bg-white flex flex-row place-content-between ">
            <div id="Logo" className="flex flex-row place-items-center">
                <img id="LogoImg" src={logo} alt="Logo"/>
                <p id="SiteTitle" className="flex font-Montaga text-xl">Trip Tise</p>
            </div>
            { width < breakpoint ? 
                <></> : 
                <div id="menu" className="flex flex-row justify-center align-center max-h-15">
                    <Button id="BtnLogIn" className="mr-5" label="Se connecter" alternate={false}></Button>
                    <div id="buffer" className="px-5"></div>
                    <Button id="BtnSignIn" label="S'enregistrer" alternate={true}></Button>
                </div>
            }
        </div>
    )
}