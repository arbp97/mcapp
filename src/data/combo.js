const combos = [
    {
      title: "McCombo Cuadruple Bacon Grande",
      img: "ComboCuadrupleBaconGrande.png",
      precio: "1,090.00",
    },    
    {
      title: "McCombo Cuadruple Bacon Mediano",
      img: "ComboCuadrupleBaconMediano.png",
      precio: "990.00",
    },    
    {
      title: "McCombo Triple Bacon Grande",
      img: "ComboTripleBaconGrande.png",
      precio: "990.00",
    },    
    {
      title: "McCombo Triple Bacon Mediano",
      img: "ComboTripleBaconMediano.png",
      precio: "890.00",
    },    
    {
      title: "McCombo BIG MAC Grande",
      img: "McCOMBOBIGMACGrande.png",
      precio: "990.00",
    },    
    {
      title: "McCombo BIG MAC Mediano",
      img: "McCOMBOBIGMACMediano.png",
      precio: "870.00",
    },    
    {
      title: "McCombo Cuarto De Libra Con Queso Grande",
      img: "McCOMBOCUARTODELIBRACONQUESOGrande.png",
      precio: "1,020.00",
    },    
    {
      title: "McCombo Cuarto De Libra Con Queso Mediano",
      img: "McCOMBOCUARTODELIBRACONQUESOMediano.png",
      precio: "880.00",
    },    
    {
      title: "McCombo Doble Cuarto De Libra Con Queso Grande",
      img: "McCOMBODOBLECUARTODELIBRACONQUESOGrande.png",
      precio: "1,200.00",
    },    
    {
      title: "McCombo Doble Cuarto De Libra Con Queso Mediano",
      img: "McCOMBODOBLECUARTODELIBRACONQUESOMediano.png",
      precio: "1,030.00",
    },    
    {
      title: "McCombo Doble Mc Bacon Grande",
      img: "McCOMBOGRANDDOBLEMcBACONGrande.png",
      precio: "1,170.00",
    },    
    {
      title: "McCombo Doble Mc Bacon Mediano",
      img: "McCOMBOGRANDDOBLEMcBACONMediano.png",
      precio: "1,030.00",
    },    
    {
      title: "McCombo Doble Tasty Grande",
      img: "McCOMBOGRANDDOBLETASTYGrande.png",
      precio: "1,250.00",
    },    
    {
      title: "McCombo Doble Tasty Mediano",
      img: "McCOMBOGRANDDOBLETASTYMediano.png",
      precio: "1,130.00",
    },    
    {
      title: "McCombo Grand Tasty Turbo Doble Bacon",
      img: "McComboGrandeGrandTastyTurboBaconDoble.png",
      precio: "1,430.00",
    },    
    {
      title: "McCombo Grand Tasty Turbo Triple Bacon",
      img: "McComboGrandeGrandTastyTurboBaconTriple.png",
      precio: "1,560.00",
    },    
    {
      title: "McCombo Grand Triple Mc Bacon Grande",
      img: "McCOMBOGRANDTRIPLEMcBACONGrande.png",
      precio: "1,320.00",
    },    
    {
      title: "McCombo Grand Triple Mc Bacon Mediano",
      img: "McCOMBOGRANDTRIPLEMcBACONMediano.png",
      precio: "1,240.00",
    },    
    {
      title: "McCombo Triple Tasty Grande",
      img: "McCOMBOGRANDTRIPLETASTYGRANDE.png",
      precio: "1,170.00",
    },    
    {
      title: "McCombo Mc Nifica Grande",
      img: "McCOMBOMcNIFICAGrande.png",
      precio: "1,020.00",
    },    
    {
      title: "McCombo Mc Nifica Mediana",
      img: "McCOMBOMcNIFICAMediano.png",
      precio: "980.00",
    },    
    {
      title: "McCombo Mc Pollo Grande",
      img: "McCOMBOMcPOLLOGrande.png",
      precio: "960.00",
    },    
    {
      title: "McCombo Mc Pollo Mediano",
      img: "McCOMBOMcPOLLOMediano.png",
      precio: "890.00",
    },   
    {
      title: "McCombo Mediano Grand Tasty Turbo Bacon Doble",
      img: "McComboMedianoGrandTastyTurboBaconDoble.png",
      precio: "1,270.00",
    },   
    {
      title: "McCombo Mediano Grand Tasty Turbo Bacon Triple",
      img: "McComboMedianoGrandTastyTurboBaconTriple.png",
      precio: "1,420.00",
    },    
    {
      title: "McCombo Nuggets x10 Grande",
      img: "McCOMBONUGGETSx10Grande.png",
      precio: "990.00",
    },    
    {
      title: "McCombo Nuggets x10 Mediano",
      img: "McCOMBONUGGETSx10Mediano.png",
      precio: "870.00",
    },    
    {
      title: "McCombo Nuggets x20 Grande",
      img: "McCOMBONUGGETSx20Grande.png",
      precio: "1,290.00",
    },    
    {
      title: "McCombo Nuggets x20 Mediano",
      img: "McCOMBONUGGETSx20Mediano.png",
      precio: "1,090.00",
    },    
    {
      title: "McCombo Pequeno Doble BBQ",
      img: "McComboPequenoDobleBBQ.png",
      precio: "549.00",
    },    
    {
      title: "McCombo Triple Mac Grande",
      img: "McCOMBOTRIPLEMACGrande.png",
      precio: "1,190.00",
    },    
    {
      title: "McCombo Triple Mac Mediano",
      img: "McCOMBOTRIPLEMACMediano.png",
      precio: "1,090.00",
    },    
    {
      title: "McCombo Grande Doble BBQ",
      img: "MENUMcComboGrandeDobleBBQ.png",
      precio: "840.00",
    },    
    {
      title: "McCombo Grande Doble Mayo",
      img: "MENUMcComboGrandeDobleMayo.png",
      precio: "840.00",
    },    
    {
      title: "McCombo Mediano Doble BBQ",
      img: "MENUMcComboMedianoDobleBBQ.png",
      precio: "700.00",
    },    
    {
      title: "McCombo Mediano Doble Mayo",
      img: "MENUMcComboMedianoDobleMayo.png",
      precio: "700.00",
    },    
    {
      title: "McCombo Pequeno Doble Mayo",
      img: "MENUMcComboPequenoDobleMayo.png",
      precio: "549.00",
    },
  ];

  export default combos;