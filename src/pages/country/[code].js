import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Country = () => {
  const router = useRouter();
  const { code } = router.query;
  const URL = "https://restcountries.com/v3.1/alpha/";
  const [countries, setCountries] = useState([]);
  let comp = URL + code
  useEffect(() => {
    
    axios
      .get(`${comp}`)
      .then((resp) => {
        console.log(resp.data[0]);
        setCountries(resp.data[0]);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
          <Link href="/">
          <a>Back</a>
          </Link>
        
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <div className={styles.flag}>
            <img style={{width: '400px', height: 'auto'}} src={countries.flags && countries.flags.png} alt={` ${countries.name && countries.name.common} flag`}></img>
          </div>
          <div
            style={{ marginLeft: "5rem", marginTop: "2rem" }}
            className={styles.info}
          >
            <h3>{countries.name && countries.name.common}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className={styles.first}>
                <span>
                  <b>Native Name:</b>
                  
                </span>
                <span>
                  <b>Population:</b>
                  {countries.population}
                </span>
                <span>
                  <b>Region:</b>
                  {countries.region}
                </span>
                <span>
                  <b>Sub Region:</b>
                  {countries.subregion}
                </span>
                <span>
                  <b>Capital:</b>
                  {countries.capital}
                </span>
              </div>
              <div className={styles.second}>
                <span>
                  <b>Top Level Domain:</b>
                </span>
                <span>
                  <b>Currencies:</b>
                  {/* {Object.values(countries.currencies)} */}
                </span>
                <span>
                  <b>Languages:</b>
                  {/* {Object.values(countries.languages)} */}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "4rem" }}>
              <span>
                <b> Border Countries:</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
