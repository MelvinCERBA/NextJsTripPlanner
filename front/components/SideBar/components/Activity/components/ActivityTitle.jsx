import {BiLinkExternal} from "react-icons/Bi";
import { IconContext } from "react-icons";
import { joinClasses } from '../../../../../commands';
import { formatCurrency } from "../../../../../commands/utils";


export const ActivityTitle = ({label, adress, price, className = ''}) => {
    return (
        <div id="title" className={joinClasses([className,"flex flew-row w-full justify-between"])}>
            <div id="place" className="flex flex-col align-self-start ">
                <span className="font-bold text-lg truncate w-auto">{price > 0 ? label + " - "+ formatCurrency(price) : label}</span>
                <span className=" text-gray-700 text-md truncate">{adress}</span>
            </div>
            <div className="flex align-center justify-self-end">
                <BiLinkExternal className="justify-self-end h-full aspect-square" size={30} ></BiLinkExternal>
            </div>
        </div>
    )
}