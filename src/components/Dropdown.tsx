import "./styles/Dropdown.scss"
interface DropdownMenuProps {
    isOpen: boolean; // Especificar el tipo booleano para isOpen
  }
const DropdownMenu: React.FC<DropdownMenuProps> = ({isOpen}) => {
    
    return (
      <div className="dropdown-menu">
      
        <ul className={`dropdown-menu__list ${isOpen ? 'open' : ''}`}>
          <li className="dropdown-menu__item">Opción 1</li>
          <li className="dropdown-menu__item">Opción 2</li>
          <li className="dropdown-menu__item">Opción 3</li>
        </ul>
      </div>
    );
  }
  
  export default DropdownMenu;