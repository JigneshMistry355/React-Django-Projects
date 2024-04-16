import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentComponent from "./Components/ParentComponent";
import EnergySectorIntensity from "./Components/Charts/EnergySectorIntensity";
import WordCloudTopicFrequency from "./Components/WordCloudTopicFrequency";
import SectorIntensityBarChart from "./Components/SectorIntensityBarChart";
import SectorRelevance from "./Components/SectorRelevance";
import DashBoard from "./Components/DashBoard";
// import WorldMapChart from "./Components/WorldMapChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="WordCloud/" element={<WordCloudTopicFrequency />} />
        <Route path="IntensityLikelihood/" element={<ParentComponent />} />
        <Route path="EnergyIntensity/" element={<EnergySectorIntensity />} />
        <Route path="SectorIntensity/" element={<SectorIntensityBarChart />} />
        <Route path="SectorRelevance/" element={<SectorRelevance />} />
        {/* <Route path="WorldMap/" element={<WorldMapChart />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
