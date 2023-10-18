import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__logo nav__link">
        GLOBAL HELPS NETWORK
        <p className="nav__sub">Sharing Hope. Nurturing Transformation.</p>
      </Link>
      <div className="nav__right">
        <Link className="nav__link nav__nav" to="/">
          HOME
        </Link>
        <Link
          className="nav__link nav__nav"
          to="https://globalhelpsnetwork.org/connecting-the-pacific-northwest-with-india/"
          target="_blank"
        >
          Donate
        </Link>
        <div className="nav__nav nav__link nav__dropdown-button">
          INDIA DISCOVERY FAIR
          <div className="nav__dropdown-content">
            <Link
              className="nav__dropdown-link"
              target="_blank"
              to="https://form.jotform.com/232295132555152"
            >
              Register
            </Link>
            <Link
              className="nav__dropdown-link"
              target="_blank"
              to="https://donorbox.org/india-discovery-fair-2022-sponsorship-2"
            >
              Sponsor
            </Link>
            <Link
              className="nav__dropdown-link"
              target="_blank"
              to="https://donorbox.org/india-discovery-fair-2022-sponsorship-2-2"
            >
              Corporate Sponsorship
            </Link>
          </div>
        </div>
        <Link className="nav__link nav__nav" to="/stories">
          NEWS AND EVENTS
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
