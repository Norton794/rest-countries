import styles from "../styles/Select.module.css";
export default (props) => {
  return (
    <select
      style={props.style ?? {}}
      className={styles.sel}
      name=""
      id=""
      onChange={(e) => props.set(e.target.value)}
    >
      <option value="" defaultValue>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
