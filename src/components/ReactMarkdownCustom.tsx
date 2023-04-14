import ReactMarkdown from "markdown-to-jsx";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import marked from "marked-react";
import { parse } from "node-html-parser";
import MarkdownIt from "markdown-it";
import { mdx } from "@mdx-js/react";
import { renderToString } from "react-dom/server";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Markdown from 'markdown-to-jsx';

import regexp from "markdown-it-regexp";
import { MDXProvider } from "@mdx-js/react";

interface MarkdownProps {
  markdownContent: string;
}

const MarkdownComponent: React.FC<MarkdownProps> = ({ markdownContent }) => {
  const markdownStyle: CSSProperties = {
    // Agrega tus estilos CSS aquí para hacer el contenido Markdown responsive
    // por ejemplo:
    width: "100%",
    padding: "16px",
  };


  const components = {
    h2: (props: any) => <h2 style={{ color: "blue" }}>{props.children}</h2>,
    h3: (props: any)  => <h3 style={{ color: "green" }}>{props.children}</h3>,
    p: (props: any)  => <p style={{ fontSize: "18px" }}>{props.children}</p>,
    code: (props: any)  => (
      <code
        style={{
          backgroundColor: "#f0f0f0",
          padding: "2px 4px",
          borderRadius: "4px",
        }}
      >
        {props.children}
      </code>
    ),
  };
  

  return (
    <div style={markdownStyle}>
      {/* Usar MDXProvider para renderizar el contenido MDX */}
      <MDXProvider components={components}>
       
        <Markdown children={markdownContent} options={{ forceBlock: true, forceWrapper: true }} />
      </MDXProvider>
    </div>
  );
};

export default MarkdownComponent;
