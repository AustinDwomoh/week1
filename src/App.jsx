import "./App.css";
import Container from "./components/card-container";
import Navbar from "./components/navbar";

const App = () => {
  //random data from chat
  const animeList = [
    {
      name: "Naruto",
      genre: "Action / Adventure",
      img: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
      url: "https://myanimelist.net/anime/20/Naruto",
    },
    {
      name: "One Piece",
      genre: "Adventure / Fantasy",
      img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      url: "https://myanimelist.net/anime/21/One_Piece",
    },
    {
      name: "Attack on Titan",
      genre: "Action / Drama",
      img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
    },
    {
      name: "Death Note",
      genre: "Mystery / Supernatural",
      img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      url: "https://myanimelist.net/anime/1535/Death_Note",
    },
    {
      name: "Fullmetal Alchemist",
      genre: "Action / Fantasy",
      img: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    },
    {
      name: "Demon Slayer",
      genre: "Action / Supernatural",
      img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
      url: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
    },
    {
      name: "Jujutsu Kaisen",
      genre: "Action / Supernatural",
      img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
      url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
    },
    {
      name: "Tokyo Ghoul",
      genre: "Horror / Supernatural",
      img: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
      url: "https://myanimelist.net/anime/22319/Tokyo_Ghoul",
    },
    {
      name: "My Hero Academia",
      genre: "Action / Superhero",
      img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
      url: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
    },
    {
      name: "One Punch Man",
      genre: "Action / Comedy",
      img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
      url: "https://myanimelist.net/anime/30276/One_Punch_Man",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="App">
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Anime favorites</h1>
        <Container animeList={animeList} />
      </div>
    </>
  );
};

export default App;
