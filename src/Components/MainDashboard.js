import "./MainDashboard.css";
import Leftdashdiv from "./Leftdashdiv";
import Rightdashdiv from "./Rightdashdiv";

const MainDashboard = (_) => {
  return (
    <>
      <div className="dash-div">
        <div className="left-dash-div">
          <Leftdashdiv />
        </div>

        <div className="right-dash-div">
          <Rightdashdiv />
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
