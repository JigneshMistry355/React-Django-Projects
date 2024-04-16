import ScatterPlot from "./ScatterPlot";
import { useState, useEffect } from "react";

export default function EnergySectorIntensity() {
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
  const xAccessor = (d) => d.intensity;
  const yAccessor = (d) => d.sector;
  return (
    <ScatterPlot
      data={data}
      x_axis_text="sector"
      y_axis_text="intensity"
      xAccessor={xAccessor}
      yAccessor={yAccessor}
    />
  );
}
