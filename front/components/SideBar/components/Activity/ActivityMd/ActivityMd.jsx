import { ActivityTitle, AddActivityButton } from '../components';
import { Divider } from '../../../..';
import defaultImg from "/public/default_activity_image.jpg";
import Image from 'next/image';
import { joinClasses } from '../../../../../commands';

export const ActivityMd = ({ label = "Activity", adress ="Ceci est une adresse", price = 15651.651, desc = "Ceci est une description", alternate = false, link = "" }) => {

  return (
    <div id="activity" className="flex flex-col items-center justify-between mx-5 my-5 gap-2 max-h-[100px] w-auto">
      <div id="activity_header" className="flex w-full max-h-[50px] items-center gap-2">
        <div id="img_container" className="aspect-square h-full">
          <Image src={defaultImg} width={50} height={50} style={{objectFit: 'cover'}} className="aspect-square rounded-xl" alt='Activity Image'></Image>
        </div>
        <Divider type="vertical" className=' h-4/5 '></Divider>
        <ActivityTitle className='' label={label} price={price} adress={adress} desc={desc} link={link}></ActivityTitle >
      </div>
      <div id="info" className="flex flex-col justify-between w-full h-full gap-2 ">
        <p id="desc" className='block-with-text'>{desc}</p>
        <AddActivityButton></AddActivityButton>
      </div>
    </div>
  );
};