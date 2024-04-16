import WordCloud from "./Charts/WordCloud";
import { useState, useEffect } from "react";

export default function WordCloudTopicFrequency() {
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
  return (
    <>
      <h1>Word Cloud : Topic Frequency</h1>
      <WordCloud data={data} />
    </>
  );
}
