import React from "react";

export const ProcImg = ({ image }) => (
    <img src={image.urls?.small} alt="Bruh, no carga" />
);
/**
 * 'ProcImg' procesa con una funcion de flecha cada imagen
 * individualmente y nos devuelve las URL correspondientes
 * al tamaño 'small' de las imagenes a mostrar en conjunto
 */
