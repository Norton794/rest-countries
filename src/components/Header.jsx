import { DarkMode } from "./Icons";
import styles from '../styles/Header.module.css'


export default (props) => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.h2}>Where in the world?</h2>
      <a className={styles.darkBtn} href="#!">
       <span className={styles.span}>{DarkMode}</span>  
       <span className={styles.darkSpan}>Dark Mode</span> 
      </a>
    </nav>
  );
};
