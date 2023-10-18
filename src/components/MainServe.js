import srcOne from "../images/one.png";
import srcTwo from "../images/two.png";
import srcThree from "../images/three.png";
import srcFour from "../images/four.png";

const MainServe = () => {
  return (
    <div className="main-serve">
      <h1 className="main-serve__title">MEET THE PEOPLE</h1>
      <h2 className="main-serve__subtitle">WE SERVE</h2>
      <div className="main-image__container">
        <img src={srcOne} className="main-image__one main-image__image" />
        <img src={srcTwo} className="main-image__two main-image__image" />
        <img src={srcThree} className="main-image__three main-image__image" />
        <img src={srcFour} className="main-image__four main-image__image" />
      </div>
    </div>
  );
};

export default MainServe;
