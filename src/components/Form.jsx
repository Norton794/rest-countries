import Input from "./Input";
import Select from "./Select";
import styles from '../styles/Form.module.css'
export default function Form (props) {
  return (
    <div className={styles.form}>
      <Input style={props.style} setSearch={props.set} />
      <Select style={props.style} set={props.setRegion} />
    </div>
  );
};
