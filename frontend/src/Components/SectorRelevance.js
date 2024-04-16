import React, { useState, useEffect } from "react";
import SectorRelevanceBarChart from "./Charts/SectorRelevanceBarChart";

export default function SectorRelevance() {
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

  const xAccessor = (d) => d.sector;
  const yAccessor = (d) => +d.relevance;

  return (
    <>
      <h1>Sector : Relevance</h1>
      <SectorRelevanceBarChart
        data={data}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
      />
    </>
  );
}
