import axios from "axios";
const instance = axios.create({
  baseURL: "https://economia.awesomeapi.com.br"
});

export default {
  quotation(currency) {
    return instance.get(`/all/${currency}`).then(result => result.data);
  }
};
