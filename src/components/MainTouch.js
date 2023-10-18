import emailLogo from "../images/emailLogo.png";
import { Link } from "react-router-dom";

const MainTouch = () => {
  return (
    <div className="main-touch">
      <h1 className="main-touch__title">EMAIL US TO</h1>
      <h2 className="main-touch__subtitle">GET IN TOUCH</h2>
      <p className="main-touch__text">We would love for you to get in touch</p>
      <div className="main-touch__container">
        <img
          alt="Email logo"
          src={emailLogo}
          className="main-touch__email-logo"
        />
        <Link
          to="mailto:gnh@globalhelpsnetowrk.org"
          className="main-touch__email"
        >
          gnh@globalhelpsnetowrk.org
        </Link>
      </div>
    </div>
  );
};

export default MainTouch;
