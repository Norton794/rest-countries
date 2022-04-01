import Countries from "../components/Countries";
import Header from "../components/Header";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className="form"></div>
      </div>
      <Countries/>
    </div>
  );
}
