import { MapImg } from "./MapImg";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";

export function Gallery() {

  const [images, setImages] = useState([]);
  /** 
   * 'useState' nos permite ir seteando el valor de images segun
   * el valor que le pasemos a la funcion setImages 
   */
  const fetchImages = async () => {
    const peticion = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=0gCcnFKGKIlPiuU7iBCI7GxKzE-SpdXFEQq0TgQ-m6o&count=6"
    );
    const data = await peticion.json();
    setImages(data);
  };
  /** 
   * Realizamos una peticion a la API con el parametro 'count' de
   * Unsplash para decirle que nos devuelva 6 imagenes para luego
   * pasarle a la funcion setImages el valor devuelvo de dicha peticion
   */
  const fetchImage = async () => {
    const peticion = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=0gCcnFKGKIlPiuU7iBCI7GxKzE-SpdXFEQq0TgQ-m6o"
    );
    const data = await peticion.json();
    setImages(data);
  };
  /**
   * En el fragmento de codigo de arriba realizamos el mismo procedimiento,
   * pero esta vez realizando una peticion de una sola imagen 
   */
  return (    
    <main id={styles.god}>
      <div id={styles.container}>
        <div id={styles.img}>
          <MapImg images={images} />
          <img id={styles.img2} src={images.urls?.regular}></img>
        </div>
        <footer id={styles.footer} className="text-center text-white">
          <button className="btn btn-primary btn-lg" type="button" onClick={fetchImage}>
            🖼
          </button>
          <button className="btn btn-primary btn-lg" type="button" onClick={fetchImages}>
            🪟
          </button>
        </footer>        
      </div>
    </main>    
  );
}
/**
 * Asignamos la vista principal de la galeria, llamamos al componente
 * 'MapImg', que devuelve la vista de 6 imagenes y abao un 'img source'
 * para la imagen en solitario
 */