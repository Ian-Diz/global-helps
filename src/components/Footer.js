import fbLogo from "../images/fbLogo.png";
import twitterLogo from "../images/twitterLogo.png";
import vimeoLogo from "../images/vimeoLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__title">Connect with us on social media</h1>
      <div className="footer__container">
        <Link to="https://www.facebook.com/globalhelpsnetwork/" target="_blank">
          <img alt="Facebook logo" src={fbLogo} className="footer__logo" />
        </Link>
        <Link to="https://twitter.com/HelpsNetwork" target="_blank">
          <img alt="Twitter logo" src={twitterLogo} className="footer__logo" />
        </Link>
        <Link to="https://vimeo.com/globalhelpsnetwork" target="_blank">
          <img alt="Vimeo logo" src={vimeoLogo} className="footer__logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
