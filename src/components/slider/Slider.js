import "./Slider.css";

const Slider = (props) => {
  return (
    <div className="Slider">
      {Object.entries(props.items).map(([key, value]) => {
        return (
          <div className="slide" key={key}>
            <img src={"../img/" + value.img} alt=""></img>
            <p>{value.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
