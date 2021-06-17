import axios from "axios";
import Key from "./key";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: Key,
        language: "en-US"
    }

});

api.get("tv/popular");

export default api;