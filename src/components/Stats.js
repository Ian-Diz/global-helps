const Stats = ({ title, text }) => {
  return (
    <div className="stats">
      <h1 className="stats__title">{title}</h1>
      <p className="stats__text">{text}</p>
    </div>
  );
};

export default Stats;
