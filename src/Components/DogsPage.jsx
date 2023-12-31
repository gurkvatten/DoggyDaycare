import React,{ useState, useEffect } 
from "react";
import { Link } from 'react-router-dom';
import './Dogspage.css';


function DogsPage() {
    const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/651ec35254105e766fbe27a1')
    .then((response) => response.json())
    .then((data) => setDogs(data.record))
    .catch((error) => {
      console.error('Error fetching dog data:', error);
    });
  }, []);

  return (
    <div>
    <h1>Our dogs</h1>
    <ul>
    {dogs.map((dog) => (
  <li key={dog.name}>
    <img src={dog.img}></img>
    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
  </li>
))}
    </ul>
  </div>
);
}

export default DogsPage;  