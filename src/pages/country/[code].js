import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Country.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconLeftArrow } from "../../components/Icons";
import { URL_ALPHA, getLanguages, getCurrencies } from "../../utils/index";

const DARKCOUNTRY = {
  body: {
    style: { backgroundColor: "#202C37", height: "100%" },
  },
  header: {
    style: { color: "white" },
    back: { backgroundColor: "#2B3945" },
  },
  container: {
    style: { backgroundColor: "#202C37" },
  },
  btn: {
    style: { color: "white", backgroundColor: "#2B3945" },
  },
  b: {
    style: { color: "white" },
  },
  span: {
    style: { color: "#fafafa" },
  },
  h3: {
    style: { color: "white" },
  },
};

const LIGHTCOUNTRY = {
  body: {
    style: { backgroundColor: "white", height: "100%" },
  },
  header: {
    style: { color: "#111517" },
    back: {  },
  },
  container: {
    style: {  },
  },
  btn: {
    style: { color: "#111517", backgroundColor: "white" },
  },
  b: {
    style: { color: "#111517" },
  },
  span: {
    style: { color: "#000" },
  },
  h3: {
    style: { color: "#111517" },
  },
};

const Country = () => {
  const router = useRouter();
  let { code } = router.query;

  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [dark, setDark] = useState(LIGHTCOUNTRY);
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

  function toogleTheme(val) {
    if (val === true) {
      setDark(DARKCOUNTRY);
      setIsDark(true);
    } else {
      setDark(LIGHTCOUNTRY);
      setIsDark(false);
    }
  }

  return (
    <div {...dark.body}>
      <Header {...dark.header} toogle={toogleTheme} isDark={isDark} />
      <div {...dark.container} className={styles.container}>
        <div
          style={{
            marginTop: "3rem",
            paddingLeft: " 5rem",
            paddingRight: "5rem",
          }}
        >
          <Link href="/">
            <a {...dark.btn} className={styles.backBtn}>
              <span className={styles.leftArrow}>{IconLeftArrow} </span>
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
            <h3 {...dark.h3}>
              {countries.name && countries.name.common}
            </h3>
            <div className={styles.list}>
              <div className={styles.first}>
                <span {...dark.span}>
                  <b {...dark.b}>Native Name: </b>
                  {countries.name && countries.name.common}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Population: </b>
                  {countries.population}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Region: </b>
                  {countries.region}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Sub Region: </b>
                  {countries.subregion}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Capital: </b>
                  {countries.capital}
                </span>
              </div>
              <div className={styles.second}>
                <span {...dark.span}>
                  <b {...dark.b}>Top Level Domain: </b>
                  {countries.tld}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Currencies: </b>
                  {getCurrencies(countries.currencies)}
                </span>
                <span {...dark.span}>
                  <b {...dark.b}>Languages: </b>
                  {getLanguages(countries.languages)}
                </span>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <span {...dark.span}>
                <b {...dark.b}> Border Countries: </b>
                <div className={styles.borders}>
                  {countries.borders?.map((b) => (
                    <Link href={`/country/${b.toLowerCase()}`}>
                      <a {...dark.btn} className={styles.border}>
                        {b.toLowerCase()}
                      </a>
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
