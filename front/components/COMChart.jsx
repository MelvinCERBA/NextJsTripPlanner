import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment/moment';
import { useState } from 'react';
import axios from 'axios';


const COMChart = ({ mode = 'mini', data = [] }) => {
  const values = []
  for (const val of data) {
    values.push(data.values)
  }

  if (mode === 'mini') {
    return (
      <>
        <AreaChart width={400} height={300} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.5}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.8}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis allowDecimals dataKey="name" />
          <YAxis interval="preserveStartEnd"  domain={['dataMin - 100', 'dataMax + 100']} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#FA4238" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </>
    );
  }

  if (mode === 'detailed') {
    return (
      <>
        <AreaChart width={1200} height={900} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.5}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.8}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis allowDecimals dataKey="name" />
          <YAxis interval="preserveStartEnd"  domain={['dataMin - 100', 'dataMax + 100']} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#FA4238" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </>
    );
  }

  if (mode === 'preview') {
    return (
      <>
        <AreaChart width={800} height={400} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.5}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FA4238" stopOpacity={0.8}/>
              <stop offset="90%" stopColor="#FA4238" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis allowDecimals dataKey="name" />
          <YAxis interval="preserveStartEnd"  domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#FA4238" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </>
    );
  }
}

export default COMChart;