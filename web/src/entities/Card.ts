import CardImages from "./CardImages";
import CardSet from "./CardSet";

export default interface Card { 
  id: string; 
  name: string; 
  images: CardImages; 
  set: CardSet; 
}