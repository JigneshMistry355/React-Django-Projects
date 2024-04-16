import React, { useState, useEffect } from "react";
import BarChart from "./Charts/BarChart";

export default function SectorIntensityBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/json/view-data/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("error fetching data", error.message));
  };

  const xAccessor = (d) => d.sector; // Accessor for sectors
  const yAccessor = (d) => +d.intensity; // Accessor for intensity, ensure it's converted to a number
  return (
    <>
      <h1>Sector : Intensity</h1>
      <BarChart
        data={data}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
        xLabel="Sector"
        yLabel="Intensity"
      />
    </>
  );
}
