import ReactMarkdown from "markdown-to-jsx";
import { CSSProperties } from "react";

interface MarkdownProps {
  markdownContent: string;
}

const MarkdownComponent: React.FC<MarkdownProps> = ({ markdownContent }) => {
  const markdownStyle: CSSProperties = {
    display: "grid", // Utilizar CSS Grid para el diseño
    gridTemplateColumns: "1fr", // Una única columna
    gap: "8px", // Espacio entre las celdas
    width: "100%", // Establecer el ancho al 100%
  };

  return (
    <ReactMarkdown
      children={markdownContent}
      components={{
        // Personalizar el componente 'div' para adaptar el ancho
        div: (props: React.HTMLAttributes<HTMLDivElement>) => (
          <div {...props} style={markdownStyle} />
        ),
      }}
    />
  );
};

export default MarkdownComponent;
