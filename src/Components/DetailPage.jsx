import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

function DetailPage() {
  const { name } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/651ec35254105e766fbe27a1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .then((data) => {
        const foundDog = data.record.find((dog) => dog.name === name);

        if (foundDog) {
          console.log('Found Dog:', foundDog);
          setDog(foundDog);
        } else {
          console.error('Dog not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching dog details:', error);
      });
  }, [name]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <p>Sex: {dog.sex}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age} år</p>
      <p>Chipnumber: {dog.chipNumber}</p>
      <h2>Owner</h2>
      <p>Name: {dog.owner.name} {dog.owner.lastName}</p>
      <p>Phonenumber: {dog.owner.phoneNumber}</p>
    </div>
  );
}

export default DetailPage;