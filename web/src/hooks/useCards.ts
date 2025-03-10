import { useQuery } from "@tanstack/react-query";
import TcgApiClient from "../services/tcg-api-client";
import Card from "../entities/Card";

const apiClient = new TcgApiClient<Card>("/cards");
const useCards = (cardSetid: string) =>
  useQuery({
    queryKey: ["cards", cardSetid],
    queryFn: apiClient.search,
    select: (data) => data,
  });

export default useCards;
