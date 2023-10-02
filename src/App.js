import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Cakes from "./Pages/Cakes/Cakes";
import CheeseCakes from "./Pages/CheesCakes/CheeseCakes";
import NewArriavls from "./Pages/NewArrivals/NewArriavls";
import About from "./Pages/About/About";
import Review from "./Pages/Review/Review";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route  path="cakes" element={<Cakes />} />
        <Route  path="cheesecakes" element={<CheeseCakes />} />
        <Route  path="newarrivals" element={<NewArriavls />} />
        <Route  path="about" element={<About />} />
        <Route  path="review" element={<Review />} />
        <Route  path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
