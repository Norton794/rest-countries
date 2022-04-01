import Countries from "../components/Countries";
import Header from "../components/Header";
import styles from "../styles/Main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

export default function Home() {
  const URL = "https://restcountries.com/v3.1/";
  const [search, setSearch] = useState("all");
  const [countries, setCountries] = useState([]);

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

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <Input setSearch={set} />
          <Select set={setRegion} />
        </div>
        <Countries countries={countries} />
      </div>
    </div>
  );
}
