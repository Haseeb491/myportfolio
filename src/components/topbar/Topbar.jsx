import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  function menuHandler() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+92 306 5951330</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>umarfarooquegondal@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={menuHandler}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
