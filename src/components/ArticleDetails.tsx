import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import InfoAside from "./InfoAside";
import "./styles/HomePage.scss";
import Footer from "./Footer";
import useFetch from "./hook/useFetch";
import ReactMarkdown from "react-markdown";
import imgDefault from "../assets/aest.jpg";
import LoadingComponent from "./Loading";
import { Toaster } from "react-hot-toast";
const ArticleDetails: React.FC = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const { loading, data, error } = useFetch(
    `https://blog-personalblog.up.railway.app/api/posts/${id}?populate=*`
  );

  const dataFetch = data && data.data && (
    <article className="articlewrapper" key={id}>
      <div>
        <div className="wrapper">
          <picture className="picwrapper">
            <img
            decoding="async" loading="lazy"
              src={data.data.attributes.file.data.attributes.url}
              alt={data.data.attributes.Title}
            />
          </picture>
          <h1 className="navigation">{data.data.attributes.Title}</h1>

          <ReactMarkdown>{data.data.attributes.Content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );

  const load = loading ? <LoadingComponent /> : dataFetch;

  return (
    <div className="grid-container">
      <Nav />

      <div className="nav-link">
        <NavLink to="#" onClick={() => navigation(-1)}>
          {"⬅"}
        </NavLink>
      </div>

      <main className="main-container">
        <section className="content">{load}</section>
        <InfoAside />
      </main>
      <Toaster position="bottom-right" reverseOrder={false} />

      <Footer />
    </div>
  );
};

export default ArticleDetails;
