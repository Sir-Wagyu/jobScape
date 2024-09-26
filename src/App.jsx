import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vacancy from "./pages/vacancy";
import DetailJob from "./components/detailJob";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import ListJob from "./pages/listJob";
import PostJob from "./pages/postJob";
import UserProfile from "./pages/userProfile";
import ResetPassword from "./pages/resetPassword";
import { SearchProvider } from "./context/SearchContext";
import Error404 from "./pages/error404";

function App() {
  const HandleAuth = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to="/" />;
    }
  };

  const HandleDashBoard = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to="/login" />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };

  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/job-vacancy"
              element={
                <Layout>
                  <Vacancy />
                </Layout>
              }
            />
            <Route
              path="/job-vacancy/:id"
              element={
                <Layout>
                  <DetailJob />
                </Layout>
              }
            />
            <Route
              path="/register"
              element={
                <HandleAuth>
                  <Register />
                </HandleAuth>
              }
            />
            <Route
              path="/login"
              element={
                <HandleAuth>
                  <Login />
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <HandleDashBoard>
                  <Dashboard />
                </HandleDashBoard>
              }
            />
            <Route
              path="/dashboard/list-job"
              element={
                <HandleDashBoard>
                  <ListJob />
                </HandleDashBoard>
              }
            />
            <Route
              path="/dashboard/list-job/create-update"
              element={
                <HandleDashBoard>
                  <PostJob />
                </HandleDashBoard>
              }
            />
            <Route
              path="/dashboard/list-job/create-update/:id"
              element={
                <HandleDashBoard>
                  <PostJob />
                </HandleDashBoard>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <HandleDashBoard>
                  <UserProfile />
                </HandleDashBoard>
              }
            />
            <Route
              path="/dashboard/profile/reset-password"
              element={
                <HandleDashBoard>
                  <ResetPassword />
                </HandleDashBoard>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <Error404 />
                </Layout>
              }
            />
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
