import { Link } from "react-router-dom";

const StoryCard = ({ logo, logoAlt, category, title, text }) => {
  return (
    <Link className="story-card" target="_blank">
      <img src={logo} alt={logoAlt} className="story-card__logo" />
      <div className="story-card__container">
        <p className="story-card__category">{category}</p>
        <h1 className="story-card__title">{title}</h1>
        <p className="story-card__text">{text}</p>
      </div>
    </Link>
  );
};

export default StoryCard;
