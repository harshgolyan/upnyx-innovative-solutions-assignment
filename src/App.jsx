import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Chatbot from "./components/Chatbot";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App;