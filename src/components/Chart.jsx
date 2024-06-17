import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];
const Chart = ({ info }) => {
  // console.log(info[0]?.diagnosis_history);

  var graphData = [
    {
      name: info[0]?.diagnosis_history[5]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[5]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[5]?.blood_pressure?.diastolic?.value,
    },
    {
      name: info[0]?.diagnosis_history[4]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[4]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[4]?.blood_pressure?.diastolic?.value,
    },
    {
      name: info[0]?.diagnosis_history[3]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[3]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[3]?.blood_pressure?.diastolic?.value,
    },
    {
      name: info[0]?.diagnosis_history[2]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[2]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[2]?.blood_pressure?.diastolic?.value,
    },
    {
      name: info[0]?.diagnosis_history[1]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[1]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[1]?.blood_pressure?.diastolic?.value,
    },
    {
      name: info[0]?.diagnosis_history[0]?.month.slice(0, 3),
      systolic: info[0]?.diagnosis_history[0]?.blood_pressure?.systolic?.value,
      diastolic:
        info[0]?.diagnosis_history[0]?.blood_pressure?.diastolic?.value,
    },
  ];
  // console.log(graphData);
  return (
    <LineChart
      width={500}
      height={300}
      data={graphData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="systolic"
        stroke="#8884d8"
        activeDot={{ r: 7 }}
      />
      <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
