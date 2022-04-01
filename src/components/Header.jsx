import { DarkMode } from "./Icons";

const STYLE_NAV = {
    display: "flex", 
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: "0 8rem",

}

export default (props) => {
  return (
    <nav style={STYLE_NAV}>
      <h2>Where in the world?</h2>
      <a style={{ fontWeight: 600, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} href="#!">
       <span style={{width: '22px', height: 'auto', paddingTop: '6px', paddingRight: '5px'}}>{DarkMode}</span>  
       <span>Dark Mode</span> 
      </a>
    </nav>
  );
};
