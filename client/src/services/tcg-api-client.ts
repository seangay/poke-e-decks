import axios, { AxiosRequestConfig } from "axios";

export interface SearchResponse<T> {
  page: number;
  pageSize: number;
  totalCount: number;
  count: number;
  data: T[];
}

export interface GetResponse<T> {
  data: T;
}

const axiosInstance = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  headers: {
    "X-Api-Key": `${import.meta.env.VITE_POKEMON_TCG_API_KEY}`,
  },
});

class TcgApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  search = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<SearchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: number | string) => {
    const res = await axiosInstance.get<GetResponse<T>>(
      this.endpoint + "/" + id
    );
    return res.data.data;
  };
}

export default TcgApiClient;
