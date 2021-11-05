import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import NewArticle from "./pages/NewArticle";
import UpdateArticle from "./pages/UpdateArticle";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":articleId" element={<SingleArticle />} />
          <Route path="new" element={<NewArticle />} />
          <Route path="update/:articleId" element={<UpdateArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
