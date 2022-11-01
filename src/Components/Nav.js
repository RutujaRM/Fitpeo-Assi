import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { ReactCountryFlag } from "react-country-flag";

const Nav = (_) => {
  return (
    <>
      <div className="flex">
        <h4>Dashboard </h4>

        <div className="icons-div">
          <FaSearch />
          <ReactCountryFlag
            countryCode="US"
            svg
            title="US"
            className="margin"
          />

          <BsGrid className="margin" />
          <MdNotificationsNone className="margin" />
          <FiSettings className="margin" />
        </div>
        <div className="user-icon-div margin">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszkmtLLmarkZ020mgO2TP7lkJK58zaWf0TA&usqp=CAU "
            alt="not display"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
