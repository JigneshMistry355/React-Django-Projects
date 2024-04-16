import WordCloudTopicFrequency from "./WordCloudTopicFrequency";
import ParentComponent from "./ParentComponent";
import SectorIntensityBarChart from "./SectorIntensityBarChart";
import SectorRelevance from "./SectorRelevance";
import "./DashBoard.css";
export default function DashBoard() {
  return (
    <>
      <div className="container">
        <div className="blocks">
          <WordCloudTopicFrequency />
        </div>
        <div className="blocks">
          <ParentComponent />
        </div>
        <div className="blocks">
          <SectorIntensityBarChart />
        </div>
        <div className="blocks">
          <SectorRelevance />
        </div>
      </div>
    </>
  );
}
