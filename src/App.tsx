import { useState } from 'react'
import './App.css'
import useCard from './hooks/useCard';

function App() {
  const [count, setCount] = useState(0);
  const {data: card, isLoading, error} = useCard("xy1-1");

  if (isLoading) return <>LOADING</>;
  if (error || !card) throw error;
  
  return (
    <>
      <p>{card.name} | {card.id} | {card.images.large}</p>
      <h1>THIS IS THE POKE-E-DECKS!</h1>
      <img src={card.images.large} />
      <img src={card.images.small} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <pre>{JSON.stringify(card, null, 2)}</pre>
    </>
  )
}

export default App
