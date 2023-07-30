import "./footer.css";
import Logo from "../../assets/nameLogo.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";

function footer() {
  return (
    <div className="marginContainer">
      <div className="margin footerContainer">
        <img className="footerLogo" src={Logo} alt="Cake L Bakes Logo" />
        <ul className="socials">
          <li>
            <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100095296204075" target="_blank">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="https://www.instagram.com/cakelbakes/" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
