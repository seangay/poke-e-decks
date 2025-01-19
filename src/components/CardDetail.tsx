import useCard from "../hooks/useCard";
import JsonDisplay from "./JsonDisplay";

interface Props {
  slug: string;
}

const CardDetail = ({ slug }: Props) => {
  const { data: card, isLoading, error } = useCard(slug);

  if (isLoading) return <>LOADING</>;
  if (error || !card) throw error;

  return (
    <>
      <img src={card.images.large} />
      <img src={card.images.small} />
      <JsonDisplay json={card} />
    </>
  );
};

export default CardDetail;
