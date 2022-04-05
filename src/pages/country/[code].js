import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconLeftArrow } from "../../components/Icons";
const Country = () => {
  const router = useRouter();
  const { code } = router.query;
  const URL = "https://restcountries.com/v3.1/alpha/";
  const [countries, setCountries] = useState([]);
  let comp = URL + code;
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
        <div
          style={{
            marginTop: "3rem",
            paddingLeft: " 5rem",
            paddingRight: "5rem",
          }}
        >
          <Link href="/">
            <a
              style={{
                boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.15)",
                padding: '0 1rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "100px",
                height: "35px",
              }}
            >
              <span style={{ width: "22px", height: "auto", display: "block", marginTop: '5px', marginRight: '5px' }}>
                {IconLeftArrow}{" "}
              </span>
              Back
            </a>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            paddingLeft: " 5rem",
            paddingRight: "5rem",
            paddingTop: "3rem",
          }}
        >
          <div className={styles.flag}>
            <img
              style={{ width: "450px", height: "auto" }}
              src={countries.flags && countries.flags.png}
              alt={` ${countries.name && countries.name.common} flag`}
            ></img>
          </div>
          <div
            style={{ marginLeft: "5rem", marginTop: "1rem" }}
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
                  <b>Native Name: </b>
                  {countries.name && countries.name.common}
                </span>
                <span>
                  <b>Population: </b>
                  {countries.population}
                </span>
                <span>
                  <b>Region: </b>
                  {countries.region}
                </span>
                <span>
                  <b>Sub Region: </b>
                  {countries.subregion}
                </span>
                <span>
                  <b>Capital: </b>
                  {countries.capital}
                </span>
              </div>
              <div className={styles.second}>
                <span>
                  <b>Top Level Domain: </b>
                  {countries.tld}
                </span>
                <span>
                  <b>Currencies:</b>
                  {/* {countries.currencies} */}
                </span>
                <span>
                  <b>Languages:</b>
                  {/* {Object.values(countries.languages)} */}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
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
