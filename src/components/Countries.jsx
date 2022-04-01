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
              <h4>{country.name.common}</h4>

              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
