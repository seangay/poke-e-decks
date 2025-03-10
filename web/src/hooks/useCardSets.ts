import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import TcgApiClient from "../services/tcg-api-client";
import CardSet from "../entities/CardSet";
import cardSets from "../data/cardSets";

const apiClient = new TcgApiClient<CardSet>("/sets");
const useCardSets = () =>
  useQuery({
    queryKey: ["cardSets"],
    queryFn: apiClient.search,
    staleTime: ms("24h"),
    initialData: cardSets,
  });

export default useCardSets;
