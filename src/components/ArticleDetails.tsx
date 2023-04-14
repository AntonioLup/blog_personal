import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import InfoAside from "./InfoAside";
import "./styles/HomePage.scss";
import Footer from "./Footer";
import useFetch from "./hook/useFetch";
import LoadingComponent from "./Loading";
import { Toaster } from "react-hot-toast";


import MarkdownComponent from "./ReactMarkdownCustom";


const ArticleDetails: React.FC = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const { loading, data, error } = useFetch(
    `https://blog-personalblog.up.railway.app/api/posts/${id}?populate=*`
  );
  console.log(data);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.data || !data.data.attributes || !data.data.attributes.Content) {
    return <div>Loading data...</div>;
  }

  

  const dataFetch = data && data.data && (
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

        <div style={{ width: '100%', overflowWrap: 'break-word' }}>
        <MarkdownComponent markdownContent={data.data.attributes.Content} />

            
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
