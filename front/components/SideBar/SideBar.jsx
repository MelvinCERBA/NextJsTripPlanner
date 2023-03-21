import {NavBar, ActivityLg, ActivityMd} from '../../components'
import { joinClasses } from '../../commands';

export function SideBar({className='', props}) {
    return (
        <div className={joinClasses(["flex flex-col", className])}>
            <NavBar/>
            <ActivityLg label = "Activité large" price = {156.1562} link='google.com' desc="Lorem ipsums fdsqfllhf sdfujhqkdflnlS SDFQGSDFUBSQDK Qiuhsdifqs sdquifhsodic" label="Activité 1" adress="32 ure du pont" />
            <ActivityMd label = "Activité medium" price = {156.1562} link='google.com' desc="Lorem ipsums fdsqfllhf sdfujhqkdflnlS SDFQGSDFUBSQDK Qiuhsdifqs sdquifhsodic" label="Activité 1" adress="32 ure du pont"/>
        </div>
    )
}