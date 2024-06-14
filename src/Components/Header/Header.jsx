import "./Header.css";
import prashraya from "../../assets/prashraya.jpeg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1>Hy Am</h1>
          <h2 class="fullname">Prashraya Panta</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            eos debitis nam eaque nemo expedita cumque! Dignissimos, similique
            iusto. Iure voluptate eaque id labore quidem minus, reiciendis
            assumenda vel recusandae.
          </p>
        </div>

        <div className="profile-image-container">
          <img src={prashraya} alt="" />
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
