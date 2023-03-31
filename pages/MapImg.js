import React from "react";
import { ProcImg } from "./ProcImg";

export const MapImg = ({ images }) => {
  if (images.length > 1 ){
    return images.map((image) => (
      <ProcImg key={image.id} image={image} />
    ));
  }return 
}
/**
 * 'MapImg' comprueba si estamos recibiendo mas de
 * una imagen o no, en caso de serlo, aplica un mapeo
 * devolviendo la 'img source' al llamar al componente
 * 'ProcImg', asi como tambien las id de cada una.
 * En caso de el 'length ser menor a 2, no aplica el mapeo
 * (caso de la imagen solitaria, y no retorna nada)
 *
 * """"Es necesario pasarle la 'key' de 'image.id' ya que
 * cada elemento debe tener un prop distinto en caso de ser
 * mas de uno, en caso contrario React marcara un erro al
 * lanzar la App web""""
 *    */


