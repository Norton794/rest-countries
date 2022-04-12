import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Country.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconLeftArrow } from "../../components/Icons";
import { URL_ALPHA, getLanguages, getCurrencies, DARKCOUNTRY, LIGHTCOUNTRY } from "../../utils/index";

const Country = (props) => {
  const router = useRouter();
  let { code } = router.query;

  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(props.dark);
  const [dark, setDark] = useState(LIGHTCOUNTRY);
  let comp = URL_ALPHA + "/" + code;
  useEffect(() => {
    axios
      .get(`${comp}`)
      .then((resp) => {
        console.log(resp.data[0]);
        setCountries(resp.data[0]);
      })
      .catch((err) => console.log("Error", err));
  }, [code, comp]);

  function toogleTheme(val) {
    console.log(val)
    if (val === true) {
      setDark(DARKCOUNTRY);
      setIsDark(true)
    } else {
      setDark(LIGHTCOUNTRY);
      setIsDark(false)
    }
    
  }

  return (
    <div {...dark.body}>
      <Header {...dark.header} toogle={toogleTheme} isDark={isDark} />
      <div {...dark.container} className={styles.container}>
        <div
        className={styles.link}
          
        >
          <Link href="/">
            <a {...dark.btn} className={styles.backBtn}>
              <span className={styles.leftArrow}>{IconLeftArrow} </span>
              Back
            </a>
          </Link>
        </div>

        <div
        className={styles.main}
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
                    <Link key={b.toLowerCase()} href={`/country/${b.toLowerCase()}`}>
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
