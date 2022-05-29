import "./Slider.css";

const Slider = (props) => {
  return (
    <div className="Slider">
      {Object.entries(props.items).map(([key, value]) => {
        return (
          <div className="slide" key={key}>
            <img src={"/img/" + value.img} alt=""></img>
            <p className="title" title={value.title}>
              {value.title}
            </p>
            {value.price && <p className="price">{"$" + value.price}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
