import styles from "../styles/Select.module.css";
export default props =>{
    return(
        <select className={styles.sel} name="" id="">
            <option disabled selected>Filter by Region</option>
            <option value="">Africa</option>
            <option value="">Americas</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option> 
        </select>
    )
}