import useCards from "../hooks/useCards";

const cardGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "12px",
  padding: 0,
};
const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: 0,
  backgroundColor: "#f5f5f5",
};
const imgStyle: React.CSSProperties = { maxWidth: "100%", borderRadius: "4px" };
const pStyle: React.CSSProperties = { margin: "8px 0 0", fontSize: "1em" };

const CardSearch = () => {
  const { data: cards, isLoading, error } = useCards("asd");

  if (error) return null;
  if (isLoading) return "LOADING...";

  return (
    <div>
      <h2>Card Search</h2>
      <div style={cardGridStyle}>
        {cards?.data.map((card) => (
          <div key={card.id} style={cardStyle}>
            <img src={card.images.large} alt={card.name} style={imgStyle} />
            <p style={pStyle}>
              {card.name} (ID: {card.id})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSearch;
