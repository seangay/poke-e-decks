import "./App.css";
import useCard from "./hooks/useCard";

function App() {
  const { data: card, isLoading, error } = useCard("xy2-5");

  if (isLoading) return <>LOADING</>;
  if (error || !card) throw error;

  return (
    <>
      <p>
        {card.name} | {card.id} | {card.images.large}
      </p>
      <h1>THIS IS THE POKE-E-DECKS!</h1>
      <img src={card.images.large} />
      <img src={card.images.small} />

      <pre>{JSON.stringify(card, null, 2)}</pre>
    </>
  );
}

export default App;
