import useCardSets from "../hooks/useCardSets";

const CardSetList = () => {
  const { data: cardSets, isLoading, error } = useCardSets();

  if (error) return null;
  if (isLoading) return "LOADING...";

  return (
    <div>
      <h2>Card Sets</h2>
      <ul>
        {cardSets?.data.map((cardSet) => (
          <li key={cardSet.id}>
            {cardSet.name} (ID: {cardSet.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSetList;
