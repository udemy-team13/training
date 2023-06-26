import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </header>
  );
}
