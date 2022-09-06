import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import DocumentDetails from "./components/DocumentDetails/DocumentDetails";
import DocumentList from "./components/DocumentList/DocumentList";
import NavBar from './components/NavBar'
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NoPage from "./components/NoPage/NoPage";
import Footer from "./components/Footer/Footer";
import ForgotPass from "./components/ForgotPass/ForgotPass";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="fotgotpass" element={<ForgotPass />}/>
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="documentlist" element={<DocumentList />} />
      <Route path="documentdetails" element={<DocumentDetails />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="*"     element={<NoPage /> } />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

export default App
