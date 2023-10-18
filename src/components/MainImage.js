import { Link } from "react-router-dom";

const MainImage = () => {
  return (
    <div className="main-image">
      <h1 className="main-image__title">
        Sharing Hope <br /> Nuturing Transformation
      </h1>
      <p className="main-image__subtitle">
        Global Helps Network exists to bring hope to villages among developing
        countries through Vocational Training, Education, and Clean Water, with
        a special emphasis on the Untouchables (or Dalits) of India
      </p>
      <Link
        to="https://globalhelpsnetwork.org/connecting-the-pacific-northwest-with-india/"
        target="_blank"
        className="main-image__link main-image__donate"
      >
        Donate
      </Link>
      <Link
        to="https://form.jotform.com/232295132555152 "
        target="_blank"
        className="main-image__link main-image__india"
      >
        India Discovery Fair
      </Link>
    </div>
  );
};

export default MainImage;
