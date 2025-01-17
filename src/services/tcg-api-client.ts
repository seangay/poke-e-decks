import axios, { AxiosRequestConfig } from "axios";
import Card from "../entities/Card";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export interface ApiResponse<T> {
  data: T;
}

const axiosInstance = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  headers: {
    'X-Api-Key': `${import.meta.env.VITE_POKEMON_TCG_API_KEY}`,
  },
});

class TcgApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // getAll = async (config: AxiosRequestConfig) => {
  //   const res = await axiosInstance
  //     .get<FetchResponse<T>>(this.endpoint, config);
  //   return res.data;
  // };

  get = async (id: number | string) => {
    const res = await axiosInstance.get<ApiResponse<T>>(this.endpoint + "/" + id);
    console.log("RESPONSE ISasdasdasd:-------->", res)
    return res.data.data;
  };
}

export default TcgApiClient;
