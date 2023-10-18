import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import StoryPage from "./StoryPage";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<StoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
