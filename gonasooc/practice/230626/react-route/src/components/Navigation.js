import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Nagivation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;