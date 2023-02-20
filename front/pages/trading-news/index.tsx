import MainLayout from '../../components/MainLayout'
import SP from '../../components/SpecialSpace'
import FluxCard from '../../components/FluxCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import COMSelect from '../../components/COMSelect';

const TradingNews = () => {
  const [authorizedFlux, setAuthorizedFlux] = useState([])
  const [flux, setFlux] = useState('')
  const [entries, setEntries] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8081/rss/authorized")
      
      console.log(data.data.message);
      
      setAuthorizedFlux(data.data.message)
    })()
  }, [])

  const handleChange = async (event) => {
    const mflux = event.target.value;
    setFlux(event.target.value);

    if (mflux === '') {
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8081/rss/flux", {
        rss: [mflux]
      })
      console.log(data.data.message[0][mflux].entries);
      setEntries(data.data.message[0][mflux].entries);
    } catch (error) {
      
    }
  };

  return (

    <MainLayout title="Trading News" description="Trading News RSS by CoM ">
      <div id='checkout' className='flex justify-center'>
        <div className='max-w-3xl'>
          <h1 className='my-5 text-5xl text-center font-h1 text-red-light dark:text-red-dark'>List <SP /> of <SP /> RSS <SP /> streams </h1>
          <h2 className='my-5 text-2xl text-center font-h2 text-black-light dark:text-slate-dark'>Keep a permanent view on the trends of the moment and do not let yourself be surprised but instead surprise !</h2>
        </div>
      </div>
      <div>
        <COMSelect onChange={handleChange} values={authorizedFlux}>Select a RSS stream</COMSelect>
      </div>
      <div className='grid grid-cols-2 gap-8 py-5 justify-between hover:justify-around transition-all'>
        {entries.map((value, id) => {
          return <FluxCard article={value} key={id} flux={flux} />
        })}
      </div>
    </MainLayout>
  )
}
export default TradingNews;