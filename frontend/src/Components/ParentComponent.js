import React, { useState, useEffect } from "react";
import ScatterPlot from "./Charts/ScatterPlot";

const ParentComponent = () => {
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
  const yAccessor = (d) => d.likelihood;
  const xscale = "intensity";
  const yscale = "likelihood";
  return (
    <>
      <h1>Intensity : Likelihood</h1>
      <div>
        <h1>Scatter Plot Example</h1>
        <ScatterPlot
          data={data}
          x_axis_text="intensity"
          y_axis_text="likelihood"
          xAccessor={xAccessor}
          yAccessor={yAccessor}
          xscale={xscale}
          yscale={yscale}
        />
      </div>
    </>
  );
};

export default ParentComponent;
