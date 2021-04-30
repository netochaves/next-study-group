import styles from '../styles/Home.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.container}>{children}</main>;
    </>
  );
};

export default Layout;
