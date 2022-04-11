import Countries from "../components/Countries";
import Header from "../components/Header";
import styles from "../styles/Main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../components/Form";

import {LIGHTSTYLE, DARKSTYLE, URL} from '../utils/index'


function Home(props) {

  
  const [search, setSearch] = useState("all");
  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(props.dark);
  const [dark, setDark] = useState(LIGHTSTYLE);

  useEffect(() => {
    axios
      .get(`${URL}${search}`)
      .then((resp) => {
        
        setCountries(resp.data);
      })
      .catch((err) => console.log("Error", err));
  }, [search]);

  function set(name) {
    if (!name) {
      setSearch("all");
    } else {
      setSearch("name/" + name);
    }
  }

  function setRegion(name) {
    if (!name) {
      setSearch("all");
    } else {
      setSearch("region/" + name);
    }
  }

  function toogleTheme(val) {
    console.log(val)
    if (val === true) {
      setDark(DARKSTYLE);
      setIsDark(true)
    } else {
      setDark(LIGHTSTYLE);
      setIsDark(false)
    }
    
  }

  return (
    <div {...dark.body}>
      <Header {...dark.header} toogle={toogleTheme} isDark={isDark} />
      <div {...dark.container} className={styles.container}>
        <div className={styles.form}>
          <Form {...dark.form} set={set} setRegion={setRegion} />
        </div>
        <div className={styles.countries}>
          <Countries {...dark.countries} countries={countries} />
        </div>
      </div>
    </div>
  );
}




export default Home