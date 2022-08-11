import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Nature from './components/Nature';
import Animal from './components/Animal';
import natureData from "./natureData"
import animalData from './animalData';

function App() {
  // this will return a map of array that will return nature iamges.
  const natureImages = natureData.map(natureUrl => {
    return(
      <Nature 
        key = {natureUrl.id}
        natureImg = {natureUrl.src.original}
        alternativeText = {natureUrl.alt}
      />
    )
  });

  const animalImages = animalData.map(animalUrl => {
    return(
      <Animal 
        key = {animalUrl.id}
        animalImg = {animalUrl.src.original}
        alternativeText = {animalUrl.src.original}
      />
    )
  })


  return (
    <div className="App">
      <NavBar />
      {natureImages}
      {animalImages}
    </div>
  );
}

export default App;