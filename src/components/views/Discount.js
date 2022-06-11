import ofertasSlider from "../../data/ofertasSlider.js"
import Slider from "../slider/Slider.js"
import "./Discount.css";

const Discount = () => {
  return (
    <div className="discount">
      <p>Discount view</p>
      <br></br>
      <h3 className="title">{ofertasSlider.categoryCoffe}</h3>
      <Slider items={ofertasSlider.itemsCoffe}/>
      <br></br>
      <h3 className="title">{ofertasSlider.category}</h3>
      <Slider items={ofertasSlider.itemsBurgers}/>
      <br></br>
      <h3 className="title">{ofertasSlider.categoryHelado}</h3>
      <Slider items={ofertasSlider.itemsHelado}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Discount;
