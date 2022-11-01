import "./Menu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGrid } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { MdTextFormat } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
const Menu = (_) => {
  return (
    <>
      <div className="menudiv">
        <div>
          <GiHamburgerMenu className="hamburger" />
        </div>
        <div>
          <span className="name gray">Menu </span> <br />
          <br />
          <br />
          <BsGrid /> &nbsp;&nbsp; <span>Dashboards </span> <br />
          <span className="ecommerce">Ecommerce </span> <br />
          <span className="saas">Saas </span> <br />
          <span className="crypto">Crypro </span> <br />
        </div>

        <div className="application-div">
          <span className="name gray">APPLICATIONS </span> <br />
          <br />
          <br />
          <FaRegCalendarAlt /> &nbsp;&nbsp; <span>Calender</span> <br />
          <FaRocketchat /> &nbsp;&nbsp; <span>Chat</span> <br />
          <FaRegFileAlt /> &nbsp;&nbsp; <span>FileManager</span> <br />
          <FaReadme /> &nbsp;&nbsp; <span>Ecommerce</span> <br />
          <MdEmail /> &nbsp;&nbsp; <span>Email</span> <br />
          <FaVoicemail /> &nbsp;&nbsp; <span>Invoices</span> <br />
          <FaProjectDiagram /> &nbsp;&nbsp; <span>Projects</span> <br />
          <MdOutlineContacts /> &nbsp;&nbsp; <span>Contacts</span> <br />
        </div>

        <div className="application-div">
          <span className="name gray">LAYOUTS </span>
        </div>

        <div className="application-div">
          <span className="name gray">PAGES </span> <br />
          <br />
          <br />
          <FaUserCheck /> &nbsp;&nbsp; <span>Authentication</span> <br />
          <FaCubes /> &nbsp;&nbsp; <span>Utility</span> <br />
        </div>

        <div className="application-div">
          <span className="name gray">COMPONENTS </span> <br />
          <br />
          <br />
          <FaElementor /> &nbsp;&nbsp; <span>UI Elements</span> <br />
          <MdTextFormat /> &nbsp;&nbsp; <span>Fonts</span> <br />
        </div>
      </div>
    </>
  );
};

export default Menu;
