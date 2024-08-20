import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AddBook from "./components/AddBook/AddBook";
import ViewBooks from "./components/Collection/ViewBooks";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<ViewBooks />} />
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>
    </>
  )

}

export default App