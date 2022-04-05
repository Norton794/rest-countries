import styles from "../styles/Input.module.css";
import { IconFind } from "./Icons";
export default (props) => {
  return (
    <div
      className={styles.main}
    >
      <div style={props.style ?? {}} className={styles.box}>{IconFind}</div>
      <input
      style={props.style ?? {}}
        className={styles.input}
        placeholder="Search for a country..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};
