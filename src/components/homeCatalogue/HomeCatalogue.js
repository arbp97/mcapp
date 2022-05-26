import React from "react";
import "./HomeCatalogue.css";

const HomeCatalogue = (props) => {
  return (
    <div className="homeCatalogue">
      <p className="homeCatalogue-title">{props.title}</p>
      <a href={props.href} 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} 
          ><img src={"../img/" + props.img}            
            style={{
              width: "90%",
              display: "flex",
              flexDirecction: "column",
              alignItems: "center",
              alignContent: "center",
            }} 
            alt="" 
          /></a>
    </div>
      );
    };

export default HomeCatalogue;
