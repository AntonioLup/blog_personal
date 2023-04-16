import React, { ReactNode, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import InfoAside from "./InfoAside";
import "./styles/HomePage.scss";
import Footer from "./Footer";
import useFetch from "./hook/useFetch";
import LoadingComponent from "./Loading";
import { Toaster } from "react-hot-toast";
import LocomotiveScroll from "locomotive-scroll";

import MarkdownComponent from "./ReactMarkdownCustom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const ArticleDetails: React.FC = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const containerRef = useRef<HTMLDivElement | null>(null); // Declare elementRef with type annotation

  const { loading, data, error } = useFetch(
    `https://blog-personalblog.up.railway.app/api/posts/${id}?populate=*`
  );
  console.log(data);


 
  const dataFetch = data && data.data && (
    <>
      <article className="articlewrapper" key={id}>
        <div className="wrapper">
          <picture className="picwrapper">
            <img
              decoding="async"
              loading="lazy"
              src={data.data.attributes.file.data.attributes.url}
              alt={data.data.attributes.Title}
            />
          </picture>
          <h1 className="navigation">{data.data.attributes.Title}</h1>

          <div >
            <MarkdownComponent markdownContent={data.data.attributes.Content} />
          </div>
        </div>
      </article>
    </>
  );


  return (
    
      <div  ref={containerRef} className="grid-container">
        <Nav />

        <div className="nav-link">
          <NavLink to="#" onClick={() => navigation(-1)}>
            {"⬅"}
          </NavLink>
        </div>

        <main className="main-container">
          <section className="content">
            {loading ? <LoadingComponent /> : dataFetch}
          </section>

          <InfoAside />
        </main>
        <Toaster position="bottom-right" reverseOrder={false} />

        <Footer />
      </div>
  
  );
};

export default ArticleDetails;
