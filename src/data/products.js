// categories & products
const products = {
  burgers: {
    category: "Hamburguesas",
    items: [
      {
        img: "big_mac.png", // first img used as category image
        title: "Big Mac",
        description:"La hamburguesa más famosa del mundo. Un sabor único.",
      },
      {
        img: "mcnifica.png",
        title: "McNífica",
        description:
          "En un mundo donde todos buscan lo nuevo, la McNífica viene a rectificar lo bueno de ser clásico.",
      },
      {
        img: "Cuarto-Libra-con-queso.png",
        title: "Cuarto de Libra con Queso",
        description:
          "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca.",
      },
      {
        img: "Doble-Cuarto-Libra-con-Queso.png",
        title: "Doble Cuarto de Libra con Queso",
        description:
          "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.",
      },
      {
        img: "Grande-Doble-McBacon.png",
        title: "Grande Doble McBacon",
        description:
          "¡NUEVO PAN! Dos carnes, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium.",
      },
      {
        img: "Grande-Tasty-Doble.png",
        title: "Grande Tasty Doble",
        description:
          "Inigualable pan con semillas de sésamo, dos medallones de carne 100% vacuna, tres fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s",
      },
      {
        img: "Grande-Tasty-Triple.png",
        title: "Grande Tasty Triple",
        description:"Inigualable pan con semillas de sésamo, tres medallones de carne 100% vacuna, cuatro fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s",
      },
      {
        img: "Grande-Triple-McBacon.png",
        title: "Grande Triple McBacon",
        description:"I¡NUEVO PAN! Triple carne, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium.",
      },
      {
        img: "Hamburguesa-(Cajita-Feliz).png",
        title: "Hamburguesa(Cajita-Feliz)",
        description:"Hamburguesa de carne 100% vacuna sin aditivos ni conservantes , condimentada con una pisca de sal y pimienta.",
      },
      {
        img: "Hamburguesa.png",
        title: "Hamburguesa",
        description:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.",
      },
      {
        img: "Mc-Fiesta_JR(Cajita-Feliz).png",
        title: "McFiestaJR(Cajita-Feliz)",
        description:"La McFiesta Jr. comienza con una carne 100% vacuna sin aditivos ni conservantes, condimentada con una pisca de sal y pimienta, con una rodaja de tomate y lechuga.",
      },
      {
        img: "Mc-Fiesta.png",
        title: "McFiesta",
        description:"Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.",
      },
      {
        img: "McDuo.png",
        title: "McDuo",
        description:"Una hamburguesa exquisita compuesta de dos carnes 100% vacuna, acompañadas del clásico pan, mostaza, kétchup, queso derretido, y un toque de cebolla que la hace única.",
      },
      {
        img: "Triple-Hamburguesa-con-queso.png",
        title: "Triple Hamburguesa con queso",
        description:"Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.",
      },
      {
        img: "Triple-Mac.png",
        title: "TripleMac",
        description:"Una hamburguesa que no es para cualquiera. Sólo los más extremos están dispuestos a saborear tres carnes 100% vacuna acompañadas del clásico pan McDonald’s, su característica salsa especial, queso derretido, lechuga fresca, pepino crocante y el toque de cebolla que la hace única.",
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
      {
        img: "McNuggets-4-unidades.png",
        title: "McNuggets 4 unidades",
        description: "Ligero sabor a empanado de harina de maíz y trigo frito con notas caramelizadas. Suave sabor a pollo que es ligeramente salado con un toque de pimienta negra y apio en el empanado.",
      },
      {
        img: "McNuggets-6-unidades.png",
        title: "McNuggets 6 unidades",
        description: "Seis piezas del mejor pollo rebozado sólo para vos. Comelas como quieras: con salsas o solas; todas son igual de deliciosas!",
      },
      {
        img: "McNuggets-10-unidades.png",
        title: "McNuggets 10 unidades",
        description: "Diez piezas del mejor pollo rebozado. Para comerlas con salsas o solas; todas son igual de deliciosas!",
      },
      {
        img: "McNuggets-20-unidades.png",
        title: "McNuggets 20 unidades",
        description: "Veinte piezas del mejor pollo rebozado, en su versión ideal para compartir. Con amigos o en pareja; con o sin salsas. Comelas como quieras. Todas son igual de deliciosas!",
      },


    ],
  },
  complements: {
    category: "Papas y Complementos",
    items: [
      {
        img: "Papas-pequeñas.png",
        title: "Papas pequeñas",
        description:
          "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última en su versión pequeña.",

      },
      {
        img: "Papas-Medianas.png",
        title: "Papas Medianas",
        description:
          "Nuestro sello. Las aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última. Crujientes y deliciosas, no vas a parar hasta terminarlas todas.",

      },
      {
        img: "Papas-Grandes.png",
        title: "Papas Grandes",
        description:
          "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.",

      },
      {
        img: "Papas-Kids.png",
        title: "Papas-Kids",
        description:
          "Nuestras clásicas papas fritas doradas y crocantes con la sal justa y en un porción adecuada para los niños.",

      },
      {
        img: "Papas-con-Cheddar-&-Bacon.png",
        title: "Papas con Cheddar & Bacon",
        description:
          "Calientes, crujientes y deliciosas, una nueva variedad llega para quedarse: Papas Fritas Cheddar fundido y trocitos de bacon.",

      },
      {
        img: "Side-Salad.png",
        title: "Side Salad",
        description:
          "Una opción para los que saben que una ensalada no es aburrida. Para los que saben que nuestras ensaladas son mucho más que verduras. Son las mejores variedades de hojas verdes y tomates Cherrys, ansiosas por acompañar tu hamburguesa.",

      },
      


    ],
  },
  desserts: {
    category: "Postres",
    items: [
      {
        img: "Cono-de-Vainilla.png",
        title: "Cono de Vainilla",
        description:
          "Un clásico cono que nunca pasa de moda. La opción que todos aman por su sabor, su dulce cucurucho y su estilo tan cool.",

      },
      {
        img: "cono-de-dulce-de-leche.png",
        title: "cono de dulce de leche",
        description:
          "Si amás el dulce de leche, si amás el helado, si amás el cucurucho, si amás un postre que te refresque; este es tu postre.",

      },
      {
        img: "Cono-combinado.png",
        title: "Cono combinado",
        description:
          "El helado para los que lo quieren todo. Para los que no se conforman con un sabor. Un helado que combina dulce de leche, vainilla y un delicioso cucurucho.",

      },
      {
        img: "Cono-Kit-Kat.png",
        title: "Cono-Kit-Kat",
        description:
          "Cremoso helado de vainilla, en un delicioso cucurucho, acompañado de la crujiente oblea de chocolate, la favorita de todos: Kit Kat. ¡Imposible resistirse!",

      },
      {
        img: "Cono-Relleno.png",
        title: "Cono Relleno",
        description:
          "Helado de vainilla, dulce de leche o combinado, servido en cono de masa crocante y con relleno de chocolate, frutilla o dulce de leche. ¿Cuál elegis?",

      },
      {
        img: "Super-Cono.png",
        title: "Super Cono",
        description:"Como el tradicional, pero con mas helado! Deliciosa mezcla de helado McDonald's en sabor dulce de leche, vainilla o combinado, dentro del exquisito cono de siempre.",

      },
      {
        img: "sundae-chocolate.png",
        title: "sundae de chocolate",
        description:"La medida justa entre salsa de chocolate y helado de vainilla que pueden hacerte vivir una experiencia explosiva.",

      },
      {
        img: "sundae-dulce-de-leche.png",
        title: "sundae de dulce de leche",
        description:"El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.",

      },
      {
        img: "sundae-frutilla.png",
        title: "Sundae de Frutilla",
        description:"El helado de vainilla que ya conocés, con una deliciosa salsa frutilla. Disfrutá la mezcla perfecta de tu postre preferido con la mejor selección de frutas.",

      },
      {
        img: "sundae-Crocantella.png",
        title: "Sundae Crocantella",
        description:"Helado de vainilla, salsa caliente y recubierto con salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",

      },
      {
        img: "Mc-Flurry-Crocantella.png",
        title: "McFlurry Crocantella",
        description:"Helado de vainilla con trocitos de deliciosas galletitas Óreo, salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",

      },
      {
        img: "McFlurry-Oreo.png",
        title: "McFlurry Oreo",
        description:"Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.",

      },
      {
        img: "McFlurry-KitKat.png",
        title: "McFlurry KitKat",
        description:"La crocante oblea de chocolate que todo el mundo conoce y ama, pero acompañada de un cremoso helado de vainilla y una deliciosa salsa tibia de chocolate. ¿Hace falta que te diga más? El break helado que esperabas.",

      },
      {
        img: "YogurKid.png",
        title: "YogurKid",
        description:"Yogur endulzado parcialmente descremado sabor a vainilla natural",

      },

    ]
    },
    drinks: {
      category: "Bebidas",
      items: [
        {
          img: "agua.png",
          title: "Agua sin gas (500ml)",
          description:"La opción ideal para refrescar todas tus comidas.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Chica",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Mediana",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Grande",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Light Chica",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Light Grande",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Zero Chica",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Zero Mediana",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Coca Cola Zero Grande",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Fanta Chica",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Fanta Mediana",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Fanta Grande",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Sprite Zero Chica",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Sprite Zero Mediana",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Bebida.png",
          title: "Sprite Zero Grande",
          description:"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.",
  
        },
        {
          img: "Jugo-de-Manzana.png",
          title: "Jugo de Manzana",
          description:"Jugo de manzana 100% natural",
  
        },
      ]
      },
      breakfast: {
        category: "Desayunos / Merienda",
        items: [
          {
            img: "Café-Premium-14oz.png",
            title: "Café Premium 14oz",
            description:"Los mejores granos seleccionados para darle un sabor único a tu café. Como a vos te gusta. Como vos te merecés.",
    
          },
          {
            img: "Café-Premium-18oz.png",
            title: "Café Premium 18oz",
            description:"Los mejores granos seleccionados para darle un sabor único a tu café. Como a vos te gusta. Como vos te merecés.",
    
          },
          {
            img: "Cappuccino-14oz.png",
            title: "Cappucino 14oz",
            description:"Un espresso doble con leche, espolvoreado con deliciosa canela y cacao, acompañado de una suave espuma.",
    
          },
          {
            img: "Cappuccino-18oz.png",
            title: "Cappucino 18oz",
            description:"Un espresso doble con leche, espolvoreado con deliciosa canela y cacao, acompañado de una suave espuma.",
    
          },
          {
            img: "Latte-14oz.png",
            title: "Latte 14oz",
            description:"Los mejores granos de café premium se mezclan con leche, dando un resultado cremoso para que tus sentidos se despierten con un sabor único.",
    
          },
          {
            img: "Latte-18oz.png",
            title: "Latte 18oz",
            description:"Los mejores granos de café premium se mezclan con leche, dando un resultado cremoso para que tus sentidos se despierten con un sabor único.",
    
          },
          {
            img: "Donut.png",
            title: "Donut",
            description:"Un esponjosa y suave donut, podes elegirla glaseada o recubierta de chocolate.",
    
          },
          {
            img: "TostadoMixto.png",
            title: "Tostado Mixto",
            description:"El sándwich único que todos conocemos, pero con un toque único. Un increíble tostado, con lomito y queso inmejorable para empezar tu día de la mejor manera.",
    
          },
          {
            img: "TostadoNapolitano.png",
            title: "Tostado Napolitano",
            description:"Lomito, Queso Cheddar y Tomate: los mejores ingredientes dentro de un increíble pan tipo casero tostado.",
    
          },
          {
            img: "Tostado4Quesos.png",
            title: "Tostado 4 Quesos",
            description:"Queso Cheddar Fundido, Queso Cheddar, Queso Cheddar Blanco y Queso Parmesano: nada puede ser mejor!",
    
          },
          {
            img: "TostadoconLomitoyQueso.png",
            title: "Tostado con Lomito y Queso",
            description:"El sándwich único que todos conocemos, pero con un toque único. Un increíble tostado, con lomito y queso inmejorable para empezar tu día de la mejor manera.",
    
          }
        ]
      },
      coffee: {
        category: "McCafé",
        items: [
          {
            img: "Espresso.png",
            title: "Espresso",
            description:"La mejor selección de finos granos de café arábicos en todo su esplendor, para que disfrutes sorbo a sorbo.",
    
          },
          {
            img: "Latte.png",
            title: "Latte",
            description:"Delicioso espresso con vainilla, leche con espuma y por si fuera poco, acompañado de un increíble crocante de caramelo.",
    
          },
          {
            img: "Frappé.png",
            title: "Frappé",
            description:"El mismo café que te ayuda a levantarte todos los días, ahora con una sensación refrescante, acompañado de crema e hilos de chocolate.",
    
          },
          {
            img: "Medialuna-de-Manteca.png",
            title: "Medialuna de Manteca",
            description:"Un clásico ideal para cualquier momento del día. Esponjosa, dulce y crocante a la vez son las características de esta delicia. Ideal para acompañar un café, un frappé o hasta un rico té.",
    
          },
          {
            img: "Medialuna-de-Grasa.png",
            title: "Medialuna de Grasa",
            description:"Tradicionales y crocantes, para acompañar tu delicioso café, o darte un gusto en cualquier momento del día.",
    
          },
          {
            img: "Croissant.png",
            title: "Croissant",
            description:"Una verdadera delicia de la pastelería francesa, para acompañarte en cualquier desayuno o merienda. ¡No te quedes sin probarlo!",
    
          },
       
        ]
      }

    
};

export default products;
