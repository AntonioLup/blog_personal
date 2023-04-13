import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicePage from "./components/Service";
import ArticleDetails from "./components/ArticleDetails";
import Error from "./components/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route   element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/article/:id" element={<ArticleDetails/>}/>
        <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
