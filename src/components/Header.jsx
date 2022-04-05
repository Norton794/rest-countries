import { DarkMode } from "./Icons";
import styles from '../styles/Header.module.css'


export default (props) => {
  const {style, back} = props
  const NEW_STYLE = {
...style,
...back
  }
  return (
    <nav className={styles.nav} style={NEW_STYLE ?? {}}>
      <h2 className={styles.h2}>Where in the world?</h2>
      <a onClick={()=>props.toogle(!props.isDark)} className={styles.darkBtn} style={props.style} href="#!">
       <span className={styles.span}>{DarkMode}</span>  
       <span className={styles.darkSpan}>Dark Mode</span> 
      </a>
    </nav>
  );
};
