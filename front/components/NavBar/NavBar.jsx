import {Button} from '../Button';
import logo from './../../public/logo-no-background.png';
// import ReactBreakpoints from 'react-breakpoints'
import { BREAKPOINTS } from "../../commands";
// import { Media } from "react-breakpoints";
import useBreakpoint from 'use-breakpoint';
import Image from 'next/image';

export function NavBar() {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, "md")
    return (
        <div className="px-8 py-3 shadow-md h-20 max-w-full bg-white flex flex-row place-content-between ">
            <div id="Logo" className="flex flex-row max-h-20 place-items-center">
                <Image src={logo} height={50} alt="Logo"/>
                <p id="SiteTitle" className="flex ml-5 font-Montaga text-xl">Trip Tise</p>
            </div>
            { BREAKPOINTS[breakpoint] < BREAKPOINTS.xs ? 
                <></> : 
                <div id="menu" className="flex flex-row shrink justify-center align-center max-h-15">
                    <Button id="BtnLogIn" className="mr-5" label="Se connecter" alternate={true}></Button>
                    <div id="buffer" className="px-5"></div>
                    <Button id="BtnSignIn" label="S'enregistrer" alternate={false}></Button>
                </div>
            }
        </div>
    )
}