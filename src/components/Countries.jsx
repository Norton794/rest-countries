import styles from "../styles/Countries.module.css";
import Link from "next/link";
export default function Countries(props) {
  return (
    <div className={styles.grid}>
      {props.countries &&
        props.countries.map((country) => (
          <Link key={country.ccn3} href={`/country/${country.ccn3}`}>
            <a>
              <div
              style={props.style}
                className={styles.main}
                key={country.name.common}
              >
                <img
                  style={{ width: "250px", height: "150px", margin: "0px" }}
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                />
                <div style={{ padding: "0 1.2rem" }}>
                  <h3 style={props.colorH3}>{country.name.common}</h3>

                  <div className={styles.info}>
                    <span style={props.colorText}>
                      <b style={props.colorH3}>Population:</b> {country.population}
                    </span>
                    <span style={props.colorText}>
                      <b style={props.colorH3}>Region:</b> {country.region}
                    </span>
                    <span style={props.colorText}>
                      <b style={props.colorH3}>Capital:</b> {country.capital}
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
