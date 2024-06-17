import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PatientsBar from "./components/PatientsBar";
import Right from "./components/Right";
import Middle from "./components/Middle";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [patients, setPatients] = useState([]);

  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      const data = await res.json();
      const somePatients = data.slice(0, 6);
      const userData = data.filter((person) => person.name == "Jessica Taylor");
      // console.log(data);
      // console.log(somePatients);
      // console.log(userData);
      setApiData(userData);
      setPatients(somePatients);
    };
    fetchData();
  }, []);

  // console.log(apiData);
  // console.log(patients);

  return (
    <div className="text-gray-800 max-w-screen-2xl mx-auto pb-10">
      <Navbar />
      <div className="xl:px-8 mx-auto lg:flex justify-between gap-5">
        <PatientsBar data={patients} />
        <Middle data={apiData} />
        <Right data={apiData} />
      </div>
    </div>
  );
};

export default App;
