import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { name } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/651ec35254105e766fbe27a1/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response:', data); // Lägg till detta för att logga API-svaret
        setDog(data);
      })
      .catch((error) => {
        console.error('Error fetching dog details:', error);
      });
  }, [name]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  // Visa detaljer om hunden
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <p>Kön: {dog.sex}</p>
      <p>Ras: {dog.breed}</p>
      <p>Ålder: {dog.age} år</p>
      <p>Chipnummer: {dog.chipNumber}</p>
      <h2>Ägare</h2>
      <p>Namn: {dog.owner.name} {dog.owner.lastName}</p>
      <p>Telefonnummer: {dog.owner.phoneNumber}</p>
    </div>
  );
}

export default DetailPage;