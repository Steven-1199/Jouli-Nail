import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import AppointmentPage from "./Pages/AppointmentPage";
import { ContextProvider } from "./Context/AppointmentContext";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "./Components/PrivateRouter";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import PickDate from "./Components/PickDate";
import ThankyouPage from "./Pages/ThankyouPage";

function App() {
  return (
    <ContextProvider>
      <div className="App w-[100vw]  top-0 bottom-0 left-0 right-0  m-0 p-0  max-w-full ">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/appointment" element={<PrivateRouter />}>
              <Route path="/appointment" element={<AppointmentPage />} />
            </Route>
            <Route path="/pickdate" element={<PickDate />}></Route>
            <Route
              path="/forgetpassword"
              element={<ForgetPasswordPage />}
            ></Route>
            <Route path="/message" element={<ThankyouPage />}></Route>
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </ContextProvider>
  );
}

export default App;
