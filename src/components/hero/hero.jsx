import { Order } from "..";
import "./hero.css";
import heroimage from '../../assets/hero-image.jpg'

function hero() {
  return (
    <div className="margin hero-section">
      <div className="left-hero">
        <h1>Best Cakes</h1>
        <p>FOR YOUR</p>
        <h1>Best Moments</h1>
        <a className="shopBtn" href="#shop"><Order /></a>
      </div>
      <div className="right-hero">
        <img src={heroimage} alt="Happy family cutting cake" />
      </div>
    </div>
  );
}

export default hero;
