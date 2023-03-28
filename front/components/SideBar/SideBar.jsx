// import {ActivityLg, ActivityMd} from './components'
import {joinClasses} from '../../commands';
import {GiWorld} from 'react-icons/gi'
import {useState} from 'react';


export function SideBar({displayMap, setDisplayMap, className='', props}) {
    // Can be null (no form displayed), 'log' or 'sign'
    const [displayForms, setDisplayForms] = useState('');

    return (
        <>
            <div className={joinClasses(["flex flex-col", className])}>
                {/* <ActivityLg label = "Activité large" price = {156.1562} link='google.com' desc="Lorem ipsums fdsqfllhf sdfujhqkdflnlS SDFQGSDFUBSQDK Qiuhsdifqs sdquifhsodic" label="Activité 1" adress="32 ure du pont" />
                <ActivityMd label = "Activité medium" price = {156.1562} link='google.com' desc="Lorem ipsums fdsqfllhf sdfujhqkdflnlS SDFQGSDFUBSQDK Qiuhsdifqs sdquifhsodic" label="Activité 1" adress="32 ure du pont"/> */}
                <div onClick={() => setDisplayMap(!displayMap)} className="h-[100px] w-[100px] absolute bottom-5 right-5 flex lg:hidden justify-center items-center rounded-full bg-white shadow-xl">
                    <GiWorld className="w-16 h-16 text-orange-main" ></GiWorld>
                </div>
            </div>
            {/* <LogInForm> </LogInForm> */}
        </>
    )
}