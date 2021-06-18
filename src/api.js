import axios from "axios";
import Key from "./key";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: Key,
        language: "en-US"
    }

});

export const tvAPi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
}

export const moviesAPi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () =>  api.get("tv/airing_today")
}