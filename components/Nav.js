import styles from '../styles/Nav.module.css';
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/about">About </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
