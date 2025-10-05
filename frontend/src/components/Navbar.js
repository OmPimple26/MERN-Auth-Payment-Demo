import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      {/* <h2 style={{ color: "#ff0077" }}>💖 MERN Boilerplate</h2> */}
      <h2 style={{ color: "#ff0077" }}>MERN Implementation</h2>
      <div>
        <Link to="/" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/payment" style={styles.link}>Payment</Link>
        <button onClick={handleLogout} style={styles.logout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "2px 20px", background: "#222", alignItems: "center" },
  link: { color: "white", marginRight: "10px", textDecoration: "none" },
  // logout: { background: "#ff0077", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
  logout: { background: "#ff0077", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }
};

export default Navbar;
