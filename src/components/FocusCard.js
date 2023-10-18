import { Link } from "react-router-dom";

const FocusCard = ({ link, title, text, image, alt }) => {
  return (
    <Link className="focus-card" to={link}>
      <img src={image} alt={alt} className="focus-card__image" />
      <div className="focus-card__container">
        <h4 className="focus-card__title">{title}</h4>
        <p className="focus-card__text">{text}</p>
      </div>
    </Link>
  );
};

export default FocusCard;
