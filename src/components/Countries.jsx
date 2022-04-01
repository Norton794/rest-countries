import styles from "../styles/Countries.module.css";
export default (props) => {
  return (
    <div className={styles.grid}>
      {props.countries &&
        props.countries.map((country) => (
          <div
            style={{
              marginTop: "25px",
              marginBottom: "20px",
              padding: "0px",
              backgroundColor: "white",
            }}
            key={country.name.common}
          >
            <img
              style={{ width: "250px", height: "150px", margin: "0px" }}
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
            <div style={{ padding: "0 2rem" }}>
              <h3>{country.name.common}</h3>

              <div className={styles.info}>
                <span>
                  <b>Population:</b> {country.population}
                </span>
                <span>
                  <b>Region:</b> {country.region}
                </span>
                <span>
                  <b>Capital:</b> {country.capital}
                </span>
              </div>


            </div>
          </div>
        ))}
    </div>
  );
};
