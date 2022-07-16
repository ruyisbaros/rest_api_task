import { useState } from 'react';
import data from './mySource.json'
import axios from 'axios'
import ContentBoxAPI from './components/apiContentBox/ContentBoxAPI';
import ContentBoxLocal from './components/localContentBox/ContentBoxLocal';
import Loading from './components/loadingAnimation/Loading';

function App() {

  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
  const [apiContent, setApiContent] = useState([])
  const [localContent, setLocalContent] = useState([])

  const searchHandler = async (e) => {
    e.preventDefault()
    setApiContent([])
    try {
      setLoading(true)
      const { data } = await axios.post(`/api/v1/players/find_artist`, { searchText })
      //console.log(data);
      setLoading(false)
      if (data.apiResponse) {
        setApiContent(data.apiResponse)
      } else if (data.localResponse) {
        setLocalContent(data.localResponse)
      }

      setSearchText("")

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="main">
      <div className="banner">

      </div>
      <form onSubmit={searchHandler} className="form">
        <h1>Welcome to bla bla</h1>
        <input type="text" placeholder="Type an Artist name..." value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
        <button type="submit">
          Search
        </button>
      </form>
      <div className="source_container">
        {loading && <Loading />}
        {
          apiContent.length > 0 &&
          apiContent.map((item, index) => (
            <ContentBoxAPI key={index} {...item} />
          ))
        }
        {
          localContent.length > 0 &&
          localContent.map((item, index) => (
            <ContentBoxLocal key={index} {...item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
