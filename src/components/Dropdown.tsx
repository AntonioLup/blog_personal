import "./styles/Dropdown.scss";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  isOpen: boolean; // Especificar el tipo booleano para isOpen
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div>
        <ul>
          <li>articulo</li>
        </ul>
      </div>
      <div>
        <ul>
        <li>
            <Link to={"/"}>🏠 Home</Link>
          </li>
          <li>
            <Link to={"/about"}>👨 About</Link>
          </li>
          <li>
            <Link to={"/service"}>🛒 Service</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
