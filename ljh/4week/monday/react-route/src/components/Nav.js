import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.inner}>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
