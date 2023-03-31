import CartWidget from "../CartWiddget/CartWidget";
import logo from "./img/icono 6.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "#333",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
      <h3 style={{ margin: "0 0 0 10px", color: "#fff" }}>Ecommerce</h3>

      <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
