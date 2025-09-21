import "../index.css";
import Card from "./cards";

const Container = (props) => {
  return (
    <div className="grid-container">
      {props.animeList.map((anime) => (
        <Card
          
          img={anime.img}
          name={anime.name}
          genre={anime.genre} 
          url={anime.url}
        />
      ))}
    </div>
  );
};

export default Container;
