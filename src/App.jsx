import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import LogIn from "./components/login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/siginup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LogOut from "./components/logout";
import SignUpBiz from "./components/signupBiz";
import CreateCard from "./components/createCard";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import DeleteCard from "./components/deleteCard";
import EditCard from "./components/editCard";

function App() {
  return (
    <div className=" d-flex flex-column min-vh-100 background">
      <div className=" d-flex flex-column min-vh-100 background2">
        <ToastContainer />
        <header>
          <Navbar />
        </header>

        <main className="flex-fill  app ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="my-cards/create-card"
              element={
                <ProtectedRoute bizOnly>
                  <CreateCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute bizOnly>
                  <DeleteCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route path="sign-Up" element={<SignUp redirect="/log-in" />} />
            <Route
              path="sign-Up-biz"
              element={<SignUpBiz redirect="/my-cards/create-card" />}
            />
            <Route path="log-in" element={<LogIn redirect="/" />} />
            <Route path="log-out" element={<LogOut redirect="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
