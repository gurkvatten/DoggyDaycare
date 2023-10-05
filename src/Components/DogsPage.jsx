import React,{ useState, useEffect } 
from "react";
import { Link } from 'react-router-dom';


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
    <h2>Our dogs</h2>
    <ul>
    {dogs.map((dog) => (
  <li key={dog.name}>
    <Link to={`/dog/${dog.name}`}>{dog.name}</Link>
  </li>
))}
    </ul>
  </div>
);
}

export default DogsPage;  