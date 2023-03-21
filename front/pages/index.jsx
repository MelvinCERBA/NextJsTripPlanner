import { Layout } from '../components';
import { Button } from '../components';
import { NavBar } from '../components/';
import { Map } from '../components/';
import { SideBar } from '../components/';

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <SideBar className="flex w-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0"/>
      <Map className="basis-1/2 hidden lg:flex lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1"/> 
    </div>
  )
}
