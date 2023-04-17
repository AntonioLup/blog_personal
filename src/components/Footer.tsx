import React from "react";
import "./styles/Footer.scss";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <p>@Copyright AntonioLup</p>
        </div>
        <ul>
          <li>
            <Link to="https://twitter.com/antoniolup1" target="_blank">
              TW 🧟‍♀️
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/channel/UCYr9Wpf4G6gkBSbozkU3agQ" target="_blank">
              YT 👩‍💻
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
