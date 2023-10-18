import FocusCard from "./FocusCard";
import book from "../images/book.png";
import person from "../images/person.png";
import health from "../images/health.png";

const MainFocus = () => {
  return (
    <div className="main-focus">
      <h1 className="main-focus__title">AREAS OF FOCUS</h1>
      <ul className="main-focus__container">
        <FocusCard
          title="Education"
          text="The Covid-19 pandemic has been a big blow to education for underprivileged children in India. With schools closed in India since March 2020 due to the Covid-19 pandemic, education has taken a big hit. Underprivileged students from rural areas are facing the big challenge as schools have turned to online education to fill the gap, but most of these children lack digital access to continue their studies. We has been strategically carrying out educational activities for children with existing resources. We have been working to cover the syllabus children would have ideally studied in school and give holistic support in other areas."
          image={book}
          alt="An open book to represent education and learning"
          link="/developing"
        />
        <FocusCard
          title="Vocational Training"
          text="We have started several Tailoring Schools where women young and old, poor or marginalized, can come free of charge and go through training for six months. Later they can start their own small business in their village, town or local market."
          image={person}
          alt="A person wearing stethoscope to represent vocational training"
          link="/partnering"
        />
        <FocusCard
          title="Clean Water & Health"
          text="The right to water is really the right to life and livelihood. Just as we cannot live without water, a country cannot survive if it is water-stressed. This resource determines our future, and acts as a driving force for economic growth."
          image={health}
          alt="A heart with a vital squiggle to represent clean water and health"
          link="/presenting"
        />
      </ul>
    </div>
  );
};

export default MainFocus;
