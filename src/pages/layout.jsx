import "../app.css";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
