import "./item.css";
import { Order } from "..";

function item({ key, name, price, image, isHome }) {

  return (
    <div key={key} className="itemContainer">
      <div className="imgContainer">
        <img className="shopimage" src={image} alt="Image of Cake" />
      </div>
      <h1 className="cake">{name}</h1>
      <h6 className="price">{price} QAR</h6>
        <a className="a" rel="noreferrer" target="_blank" href={`https://wa.me/97433471171?text=Your%20Order%20%3A%20${name}%0APrice%20%3A%20${price}%20QAR`}>
        <Order isHome={isHome} name={name} price={price}/>
        </a>

    </div>
  );
}

export default item;
