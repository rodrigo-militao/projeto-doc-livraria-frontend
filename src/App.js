import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.scss';
import './assets/css/code.scss';

import SingleArticle from "./pages/SingleArticle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import { GroupsProvider } from "./context/GroupsContext";


function App() {
  return (
    <GroupsProvider>
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
                  </Route>
                </Routes>
              </>
              <ScrollTop />
            </div>

          </div>

          <Footer />

        </div>

      </BrowserRouter>
    </GroupsProvider>
  );
}

export default App;
