import Input from "./Input";
import Select from "./Select";
import styles from '../styles/Form.module.css'
export default (props) => {
  return (
    <div className={styles.form}>
      <Input setSearch={props.set} />
      <Select set={props.setRegion} />
    </div>
  );
};
