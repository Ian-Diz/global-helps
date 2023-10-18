import Stats from "./Stats";

const MainStats = () => {
  return (
    <div className="main-stats">
      <h1 className="main-stats__title">HERE ARE A FEW</h1>
      <h2 className="main-stats__subtitle">STARTLING STATISTICS</h2>
      <div className="main-stats__container">
        <Stats title="$1.25" text="Amount a family of four lives on daily" />
        <Stats
          title="287 Million"
          text="Adults living without access to education"
        />
        <Stats
          title="1.5 Million"
          text="Children die each year due to polluted water"
        />
      </div>
    </div>
  );
};

export default MainStats;
