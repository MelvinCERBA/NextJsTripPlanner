import { ActivityTitle, AddActivityButton } from '../components';
import { Divider } from '../..';
import Image from 'next/image';
import { joinClasses } from '../../../commands';


export const ActivityLg = ({ label, adress, price, desc, link}) => {
  if (!label | !adress | !price | !desc | !link) {
    throw new Error('Missing parameter.');
  } else if (typeof label != 'string' | typeof adress != 'string' | typeof desc != 'string' | typeof link != 'string' | typeof price != 'number' ) {
    throw new Error('Incorrect parameter type.');
  }
  return (
    <div id="activity" className="flex place-items-center mx-5 my-5 gap-2 max-h-[150px]">
      <div id="img_container" className="aspect-square h-full ">
        <Image src={"/public/default_activity_image.jpg"} style={{objectFit: 'cover'}} width={50} height={50} className="aspect-square rounded-3xl" alt='Activity Image'></Image>
      </div>
      <Divider type="vertical" className=' h-4/5 '></Divider>
      <div id="info" className="flex flex-col justify-between h-full gap-2 ">
        <ActivityTitle className='' price={price} label={label} adress={adress} desc={desc} link={link}></ActivityTitle >
        <p id="desc" className='block-with-text'>{desc}</p>
        <AddActivityButton/>
      </div>
    </div>
  );
};