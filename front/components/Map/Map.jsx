import { joinClasses } from '../../commands';

export function Map({className ='', props}) {
    return (
        <div className={joinClasses(["bg-slate-600", className])}>

        </div>
    )
}