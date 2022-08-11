import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Nature from './components/Nature';
import natureData from "./natureData"

function App() {
  // this will return a map of array that will return nature iamges.
  const images = natureData.map(url => {
    return(
      <Nature 
        key = {url.id}
        img = {url.src.original}
        alternativeText = {url.alt}
      />
    )
  })


  return (
    <div className="App">
      <NavBar />
      {images}
    </div>
  );
}

export default App;