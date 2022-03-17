import './App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ShowingLibraryInformations from './components/ShowingLibraryInformations';

function FetchApi(setError, setDatas, setItems, setIsLoaded, setRandomElement) {
  fetch("https://libraries.io/api/platforms?api_key=a88acc632cc8f138cc53495e3aa25549")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setDatas(result);
        setRandomElement(Math.floor(Math.random() * result.length));
        setItems(result[Math.floor(Math.random() * result.length)]);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [random_element, setRandomElement] = useState(0);
  const [datas, setDatas] = useState([]);

  useEffect(() => FetchApi(setError, setDatas, setItems, setIsLoaded, setRandomElement), []);

  const pickupRandomLibrary = () => {
    setRandomElement(Math.floor(Math.random() * datas.length));
    setItems(datas[random_element]);
  };

  const updateLocalStorage = (shouldSave) => {
    if (!localStorage.getItem(items.name) && shouldSave === true) localStorage.setItem(items.name, random_element);
    else localStorage.removeItem(items.name);
  };

  return (
    <div>
      <ShowingLibraryInformations
        error={error}
        isLoaded={isLoaded}
        items={items}
      />
      <div>
        <button onClick={pickupRandomLibrary}>Print another library</button>
        <button onClick={() => updateLocalStorage(true)}>Save into Favourites</button>
        <button onClick={() => updateLocalStorage(false)}>delete from favourites</button>
      </div>
      <button>
        <Link to={{
          pathname: `/favourites/${JSON.stringify(localStorage)}`,
        }}
        >Go to Favourites</Link>
      </button  >
    </div>
  );
}
export default App;