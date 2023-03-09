import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Regester from "./pages/Regester";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeqPage from "./pages/FeqPage";
import ConectUS from "./pages/ConectUS";
import AddProject from "./pages/add-project";
import Invistor from "./pages/Invistor";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/register"
            element={<Regester isAuthenticated={isAuthenticated} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/feq" element={<FeqPage />} />
          <Route path="/invistor" element={<Invistor />} />
          <Route path="/conectus" element={<ConectUS />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
