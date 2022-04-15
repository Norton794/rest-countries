import styles from "../styles/Select.module.css";
export default function Select(props) {
  return (
    <select
    role="select"
    aria-label="Regions"
      style={props.style ?? {}}
      className={styles.sel}
      name="select"
      id="select"
      onChange={(e) => props.set(e.target.value)}
    >
      <option value="" defaultValue>
        All Regions
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
