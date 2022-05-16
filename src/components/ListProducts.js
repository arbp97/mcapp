import Product from "./Product.js";
import "../theme/ListProducts.css";

function ListProducts() {
  return (
    <div className="lista-de-productos">
      <Product
        imagen="mcnifica.png"
        nombre="Mac Simple"
        precio="$250"
        ingredientes="hamburgesa con una carne mas cebolla,queso,tomate y lechuga"
      />
      <Product
        imagen="big_mac.png"
        nombre="BigMac"
        precio="$750"
        ingredientes="hamburgesa con doble carne mas cebolla,queso y lechuga"
      />
      <Product
        imagen="mc_pollo.png"
        nombre="McPollo"
        precio="$450"
        ingredientes="hamburgesa con pollo mas cebolla y lechuga"
      />
      <Product
        imagen="mc_pollo_2.png"
        nombre="McPollo2"
        precio="$720"
        ingredientes="hamburgesa con doble pollo mas queso,tomate, cebolla y lechuga"
      />
    </div>
  );
}

export default ListProducts;
