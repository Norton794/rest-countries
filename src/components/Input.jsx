import styles from "../styles/Input.module.css";
import { IconFind } from "./Icons";
export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div className={styles.box}>{IconFind}</div>
      <input
        className={styles.input}
        placeholder="Search for a country..."
        onChange={(e) => props.setSearch("name/" + e.target.value)}
      />
    </div>
  );
};
