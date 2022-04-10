import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Country.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconLeftArrow } from "../../components/Icons";
import { URL_ALPHA, getLanguages, getCurrencies } from "../../utils/index"

const Country = () => {
  const router = useRouter();
  let { code } = router.query;

  const [countries, setCountries] = useState([]);
  const comp = URL_ALPHA + "/" + code;
  useEffect(() => {
    axios
      .get(`${comp}`)
      .then((resp) => {
        console.log(resp.data[0]);
        setCountries(resp.data[0]);
      })
      .catch((err) => console.log("Error", err));
  }, [code]);

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
                padding: "0 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "100px",
                height: "35px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "auto",
                  display: "block",
                  marginTop: "5px",
                  marginRight: "5px",
                }}
              >
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
            paddingRight: "2rem",
            paddingTop: "3rem",
          }}
        >
          <div className={styles.flag}>
            <img
              src={countries.flags && countries.flags.png}
              alt={` ${countries.name && countries.name.common} flag`}
            ></img>
          </div>
          <div className={styles.info}>
            <h3>{countries.name && countries.name.common}</h3>
            <div className={styles.list}>
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
                  <b>Currencies: </b>
                  {getCurrencies(countries.currencies)}
                </span>
                <span>
                  <b>Languages: </b>
                  {getLanguages(countries.languages)}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <span>
                <b> Border Countries: </b>
                <div className={styles.borders}>
                  {countries.borders?.map((b) => (
                    <Link href={`/country/${b.toLowerCase()}`}>
                      <a className={styles.border}>{b.toLowerCase()}</a>
                    </Link>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
