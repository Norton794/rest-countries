import styles from "../styles/Countries.module.css";
import Link from "next/link";
export default (props) => {
  return (
    <div className={styles.grid}>
      {props.countries &&
        props.countries.map((country) => (
          <Link href={`/country/${country.ccn3}`}>
            <a>
              <div
                className={styles.main}
                key={country.name.common}
              >
                <img
                  style={{ width: "250px", height: "150px", margin: "0px" }}
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                />
                <div style={{ padding: "0 1.2rem" }}>
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
            </a>
          </Link>
        ))}
    </div>
  );
};
