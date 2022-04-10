export const DARKSTYLE = {
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

export const LIGHTSTYLE = {
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

export const URL = "https://restcountries.com/v3.1/";

export const URL_ALPHA = "https://restcountries.com/v3.1/alpha";

export function getLanguages(languages = {}) {
  let str = [];
  if (Object.values(languages).length > 1) {
    for (let i = 0; i < Object.values(languages).length; i++) {
      str.push(Object.values(languages)[i]);
    }
    return str.join(", ");
  } else {
    return Object.values(languages);
  }
}

export function getCurrencies(currencies) {
  // let val = Object.values(currencies) || null;
  // console.log(val?.map((v) => v.name));
  //return Object.values(currencies)?.map((v) => v.name + ", ")
  if (typeof currencies === "object") {
    return Object.values(currencies)
      ?.map((v) => v.name + "")
      .join(", ");
  }
}
