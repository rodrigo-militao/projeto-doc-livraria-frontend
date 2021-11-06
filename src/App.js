import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.scss';

import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import NewArticle from "./pages/NewArticle";
import UpdateArticle from "./pages/UpdateArticle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <Navbar />

      <div className="main-wrapper">

        <div className="sidebar-container">
          <Sidebar />
        </div>

        <div className="main-container">
          <BrowserRouter>
            <Routes>
              <Route path="/">
               {/*  <Route index element={<Home />} /> */}
                <Route path=":articleId" element={<SingleArticle />} />
                <Route path="new" element={<NewArticle />} />
                <Route path="update/:articleId" element={<UpdateArticle />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>

      </div>

    </>
  );
}

export default App;
