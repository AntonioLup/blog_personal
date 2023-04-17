import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./styles/Article.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "./hook/useFetch";
import LoadingComponent from "./Loading";
import { Toaster } from "react-hot-toast";

const Articles: React.FC = () => {
  const navigation = useNavigate();
  const [idCategory, setIdCategory] = useState(1);
  const { loading, data, error } = useFetch(
    `https://blog-personalblog.up.railway.app/api/posts?filters[categories]=${idCategory}&populate=*`
  );
  console.log(data);
  const handleArticle = (id: any) => {
    navigation(`/article/${id}`);
  };

  const dataFetch =
    data &&
    data.data &&
    data.data.map((post: any) => {
      // Verifica si el objeto post es un número, en cuyo caso no hay datos disponibles
      if (typeof post === "number") {
        return null; // O maneja de manera apropiada cuando no hay datos disponibles
      }

      // Accede a las propiedades del objeto post solo si están disponibles
      const imageUrl = post?.attributes.file.data.attributes.url;
      const title = post?.attributes?.Title;
      const content = post?.attributes?.Content;
      console.log(imageUrl);

      return (
        <div className="articlewrapper" key={post.id}>
          <picture className="picturearticle">
            <img src={imageUrl} decoding="async" loading="lazy" alt={title} />
          </picture>
          <div>
            <h3 onClick={() => handleArticle(post.id)}>{title}</h3>
            <p>{content?.slice(0, 150) + "..."}</p>
          </div>
        </div>
      );
    });
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null); // Ref para acceder al contenedor del carousel

  // Función para mover el carousel a la izquierda
  const handlePrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  // Función para mover el carousel a la derecha
  const handleNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const load = loading ? <LoadingComponent /> : dataFetch;
  return (
    <>
      <div className="categoriwrapper">
          <button className="prev-button" onClick={handlePrev}>
            Prev
          </button>
        <div ref={carouselRef} className="categoria">
          <div style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            <span
              onClick={() => setIdCategory(1)}
              className={`${idCategory == 1 && "activeT"} categorycheck`}
            >
              React
            </span>
            <span
              onClick={() => setIdCategory(2)}
              className={`${idCategory == 2 && "activeT"} categorycheck`}
            >
              StartUp
            </span>
            <span
              onClick={() => setIdCategory(3)}
              className={`${idCategory == 3 && "activeT"} categorycheck`}
            >
              WordPress
            </span>
          </div>
        </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
      </div>
      <div>{load}</div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Articles;
