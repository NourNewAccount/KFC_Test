import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";

const Home = React.lazy(() => import("./pages/Home/Home"));
const ExploreDetailsPage = React.lazy(() =>
  import("./pages/ExploreDetailsPage/ExploreDetailsPage")
);

function App() {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <div className="App bg-gray-100">
          <Header className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs w-full" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/explore" element={<ExploreDetailsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;


