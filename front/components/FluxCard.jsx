import COMButton from "./COMButton";
import COMChart from "./COMChart";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment/moment';
import { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FluxCard = ({flux = "", article = {}, key = 0}) => {

  return (
    <>
      <div className="bg-white-light dark:bg-gray-800/75 shadow-md rounded-lg text-black-light dark:text-slate-dark">
        <div className="p-3 flex flex-row">
          <div className="basis-9/12 transition-all flex justify-center mr-5 mt-2 text-xl font-h3">
            {article.title}
          </div>
          <div className="basis-3/12 flex justify-center">
            <COMButton href={`/trading-news/${flux}/${key}`}>Show article</COMButton>
          </div>
        </div>
        <div className="m-2">
          Published {article.published.substring(0, article.published.length - 5)}
        </div>
      </div>
    </>
  )
}

export default FluxCard;