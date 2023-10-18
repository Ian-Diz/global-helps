import StoryCard from "./StoryCard";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const MainUpcoming = () => {
  return (
    <div className="main-upcoming">
      <h1 className="main-upcoming__title">HERE ARE OUR</h1>
      <h2 className="main-upcoming__subtitle">UPCOMING NEWS & EVENTS</h2>
      <ul className="main-upcoming__container">
        <StoryCard
          logo={logo}
          logoAlt="Global Helps Network logo"
          category="Category: Coming Soon"
          title="Another Graduating Class!"
          text="Another class of about twenty students graduated just one month ago from our Unplugged Hub Computer Training Course. We are so proud of them!"
        />
        <StoryCard
          logo={logo}
          logoAlt="Global Helps Network logo"
          category="Category: Coming Soon"
          title="Meeting Physical and Spiritual Needs"
          text="July marked the fourth month of our emergency nutrition program carried out by our Community Health Workers in the field."
        />
        <StoryCard
          logo={logo}
          logoAlt="Global Helps Network logo"
          category="Category: Coming Soon"
          title="Health, Tailoring and Transformation"
          text="This past two months, we have already recruited the next two Community Health Workers. One is a former worker of the government and has brought her experience to the job as well as what she learned from our nurse-led training. We now have four full-time Community Health Workers and four new Clean Water Businesses launched from this year alone!"
        />
      </ul>
      <Link className="main-upcoming__link" to="/stories">
        READ MORE ARTICLES
      </Link>
    </div>
  );
};

export default MainUpcoming;
