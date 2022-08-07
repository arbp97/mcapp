import "./McButton.css";
import { IMG_PATH } from "../../config";

type McButtonProps = {
  fixed?: boolean;
  color?: string;
  img?: string;
  text: string;
  onClick: () => void;
};

const McButton = ({ fixed, color, img, text, onClick }: McButtonProps) => {
  return (
    <button
      className={fixed ? "McButton fixed" : "McButton"}
      onClick={onClick}
      style={{ background: color }}
    >
      {img && <img src={IMG_PATH + img} alt="" />}
      {text}
    </button>
  );
};

export default McButton;
