import "./styles/Dropdown.scss";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  isOpen: boolean; // Especificar el tipo booleano para isOpen
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  
  return (
    <div  className={`dropdown ${isOpen ? "open" : ""}`}>
     
    </div>
  );
};

export default DropdownMenu;
