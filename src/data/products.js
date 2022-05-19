// categories & products
const products = {
  burgers: {
    category: "Hamburguesas",
    items: [
      {
        img: "big_mac.png", // first img used as category image
        title: "Big Mac",
        description: "La hamburguesa más famosa del mundo. Un sabor único.",
      },
      {
        img: "mcnifica.png",
        title: "McNífica",
        description:
          "En un mundo donde todos buscan lo nuevo, la McNífica viene a rectificar lo bueno de ser clásico.",
      },
    ],
  },
  chicken: {
    category: "Sándwiches de Pollo",
    items: [
      {
        img: "mc_pollo.png",
        title: "McPollo",
        description:
          "El auténtico sabor del pollo lo encontrás en nuestro clásico McPollo.",
      },
      {
        img: "mc_pollo_2.png",
        title: "McPollo doble",
        description: "El clásico McPollo, esta vez con doble sabor.",
      },
    ],
  },
};

export default products;
