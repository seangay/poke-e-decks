import { useQuery } from "@tanstack/react-query";
import TcgApiClient from "../services/tcg-api-client";
import Card from "../entities/Card";

const apiClient = new TcgApiClient<Card>("/cards");
const useCard = (slug: string) =>
  useQuery({
    queryKey: ["cards", slug],
    queryFn: () => apiClient.get(slug),
    select: (data) => data,
  });

export default useCard;
