import Nav from "./Nav";
import MainDashboard from "./MainDashboard";
import Menu from "./Menu";

const Main = (_) => {
  return (
    <>
      <div className="main-div">
        {/*Left div */}
        <div className="left-div ">
          <Menu />
        </div>

        {/*right div */}
        <div className="right-div">
          <Nav />
          <MainDashboard />
        </div>
      </div>
    </>
  );
};

export default Main;
