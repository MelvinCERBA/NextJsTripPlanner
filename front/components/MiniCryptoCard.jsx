import COMButton from "./COMButton";
import COMChart from "./COMChart";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment/moment';
import { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MiniCryptoCard = ({ currency, token = false, deletable = false, deleteHandler = ()=>{}, mode = 'mini' }) => {
  const [isSSR, setIsSSR] = useState(true);
  const [courses, setCourses] = useState();
  let headersFields;

  const dict = {
    "BTC-USD": "Bitcoin (BTC)",
    "ETH-USD": "Ethereum (ETH)",
    "DOGE-USD": "Dogecoin (DOGE)",
    "USDT-USD": "Tether (USDT)",
  };

  const daysDict = {
    'mini': 4,
    'preview': 10,
    'detailed': 30,
  }

  if (token) {
    headersFields = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  } else {
    headersFields = {}
  }

  useEffect(() => {
    (async () => {
      setIsSSR(false);
      const res = await axios.post("http://localhost:8081/crypto/historic", {
          currencies: [currency],
          date: moment().subtract(daysDict[mode], 'days').format("YYYY-MM-DD") + "-00-00"
        },
        headersFields
      )
      
      let arr = []
      let i = 0

      for (var course of Object.values(res.data.data.message[0][currency].high)) {
        arr.push({
          name: moment().subtract(4 - i, 'days').format("DD/MM"),
          value: course
        })
        i++
      }

      setCourses(arr)
    })()
  }, []);

  function calcCourse(Va, Vd) {
    return Math.round(((Va-Vd)/Vd)*10000)/100
  }

  function transfromValue(value = 0) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(value)
  }

  return (
    <>
      <div className="bg-white-light dark:bg-gray-800/75 shadow-md rounded-lg text-black-light">
        <div className="p-3 flex flex-row">
          <div className="basis-7/12 justify-center">
            <div className="transition-all flex justify-center">
              {!isSSR && courses && <COMChart mode={mode} little data={courses} />}
              {!courses && <CircularProgress className="inline-block align-middle my-20" size={70} color="inherit" />}
            </div>
          </div>
          <div className="basis-5/12 font-h3 tracking-wide">
            <h3 className="text-xl my-4 dark:text-slate-dark">Name : {courses ? dict[currency] : "Loading"}</h3>
            <h3 className="text-xl my-4 dark:text-slate-dark">Value : {courses ? `${transfromValue(courses[4].value)}` : "Loading"}</h3>
            <h3 className="text-xl my-4 dark:text-slate-dark">Courses : {courses ? `${calcCourse(courses[4].value, courses[3].value)}%` : "Loading"}</h3>
            <div className="flex justify-center mt-5">
              <COMButton>Find out more</COMButton>
            </div>
            {deletable &&
              <div className="flex justify-center mt-2">
                <COMButton inverted onClick={deleteHandler}>
                  <DeleteForeverIcon />
                </COMButton>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCryptoCard;