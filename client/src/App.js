
import data from './mySource.json'
import loadingImg from "./assets/loading.gif"

function App() {
  return (
    <div className="main">
      <div className="banner">

      </div>
      <form className="form">
        <h1>Welcome to bla bla</h1>
        <input type="text" placeholder="Type an Artist name..." />
        <button type="submit">search</button>
      </form>
      <div className="source_container">
        {
          data.artists.map(artist => (
            <div className="source_box">
              <img src={artist.image} alt="" />
              <div className="art_name">
                {artist.artistName}
              </div>
              <a href={artist.url} target="_blank" rel="noreferrer" className="the_link">
                <i className="fa-solid fa-music"></i>
                {/* <img src={loadingImg} alt="" /> */}
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
