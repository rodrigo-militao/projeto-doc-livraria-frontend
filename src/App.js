import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.scss';
import './assets/css/code.scss';

import SingleArticle from "./pages/SingleArticle";
import NewArticle from "./pages/NewArticle";
import UpdateArticle from "./pages/UpdateArticle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="navPusher">
        <div className="docMainWrapper wrapper">

          <Sidebar />

          <div className="container mainContainer docsContainer">
            <>
              <Routes>
                <Route path="/">
                  <Route path=":articleId" element={<SingleArticle />} />
                  <Route path="new" element={<NewArticle />} />
                  <Route path="update/:articleId" element={<UpdateArticle />} />
                </Route>
              </Routes>
            </>
            <ScrollTop />
          </div>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
