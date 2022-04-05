import Countries from "../components/Countries";
import Header from "../components/Header";
import styles from "../styles/Main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Form from "../components/Form";

const DARKSTYLE = {
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

  form: {
    style: { backgroundColor: "#2B3945", color: "white" },
  },

  countries: {
    style: { backgroundColor: "#2B3945" },
    colorH3: { color: "white" },
    colorText: { color: "#FAFAFA" },
  },
};

const LIGHTSTYLE = {
  body: {
    style: { backgroundColor: "white" },
  },

  header: {
    style: { color: "#111517" },
    back: {},
  },

  container: {
    style: {},
  },

  form: {
    style: { backgroundColor: "white", color: "#111517" },
  },

  countries: {
    style: { backgroundColor: "white" },
    colorH3: { color: "#111517" },
    colorText: { color: "#858585" },
  },
};

export default function Home() {
  const URL = "https://restcountries.com/v3.1/";
  const [search, setSearch] = useState("all");
  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [dark, setDark] = useState(LIGHTSTYLE);

  useEffect(() => {
    axios
      .get(`${URL}${search}`)
      .then((resp) => {
        //console.log(JSON.stringify(resp.data[0]))
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
    if (val === true) {
      setDark(DARKSTYLE);
      setIsDark(true);
    } else {
      setDark(LIGHTSTYLE);
      setIsDark(false);
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
