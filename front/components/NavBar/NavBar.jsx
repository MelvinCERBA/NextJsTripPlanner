import {Button} from '../Button';
// import logo from '../../public/logo-no-background.png';
import Image from 'next/image';
import {FiMenu} from 'react-icons/fi';

export function NavBar() {
    const login = () => {
        return 'hello';
    }
    
    const signin = () => {
        return;
    }
    return (
        <div className="
        px-4 shadow-2xl h-18 w-full bg-white flex place-items-center place-content-between ">
            <div id="Logo" className="flex h-16 place-items-center">
                <Image src="/public/logo-no-background.png" height={50} width={50} alt="Logo"/>
                <p id="SiteTitle" className="flex w-auto ml-5 font-Montaga text-xl">Trip Tise</p>
            </div> 
            <div id="menu" className="
                relative right-1 hidden h-16 my-2
                lg:flex lg:justify-center lg:align-center">
                <div id="buffer" className="w-12 flex-shrink"></div>
                <Button id="BtnLogIn" className="" label="Se connecter" alternate={true}></Button>
                <div id="buffer" className="w-2 flex-shrink"></div>
                <Button id="BtnSignIn" className="" label="S'enregistrer" alternate={false}></Button>
            </div>
            <div id="burgerMenu" className="w-16 h-16 flex lg:hidden"> 
                <FiMenu className="w-16 h-16 text-orange-main"></FiMenu>  
            </div>
        </div>
    )
}