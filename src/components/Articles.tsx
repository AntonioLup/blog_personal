import React, { ReactNode, useEffect, useState } from "react";
import "./styles/Article.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "./hook/useFetch";
import imgDefault from "../assets/aest.jpg";
import LoadingComponent from "./Loading";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const Articles: React.FC = () => {
  const navigation = useNavigate();
  const [idCategory, setIdCategory] = useState(1);
  const { loading, data, error } = useFetch(
    `https://blog-personalblog.up.railway.app/api/posts?filters[categories]=${idCategory}&populate=*`
  );


  const handleArticle = (id: any) => {
    navigation(`/article/${id}`);
  };

  useEffect(() => {
    // Actualizar el título de la página
    document.title = "Artículos";
  }, []);

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
            <img 
            src={imageUrl} 
            decoding="async" 
            loading="lazy"
            alt={title} 
            />
          </picture>
          <div>
            <h3 onClick={() => handleArticle(post.id)}>{title}</h3>
            <p>{content?.slice(0, 150) + "..."}</p>
          </div>
        </div>
      );
    });

  const load = loading ? <LoadingComponent /> : dataFetch;
  return (
    <div>
      <div className="categoria">
        <span
          onClick={() => setIdCategory(3)}
          className={`${idCategory == 3 && "activeT"} categorycheck`}
        >
          WordPress
        </span>
        <span
          onClick={() => setIdCategory(2)}
          className={`${idCategory == 2 && "activeT"} categorycheck`}
        >
          StartUp
        </span>
        <span
          onClick={() => setIdCategory(1)}
          className={`${idCategory == 1 && "activeT"} categorycheck`}
        >
          React
        </span>
      </div>
      <div>{load}</div>
    </div>
  );
};

export default Articles;