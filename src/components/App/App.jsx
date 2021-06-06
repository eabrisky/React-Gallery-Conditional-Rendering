import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  // STATE Variables
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log('in useEffect');
    getGallery();
  }, []); // end useEffect

  // GET
  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log('response data: ', response.data);
      setGalleryList(response.data);
    }) // end .then
    .catch(err => {
      console.log('axios error getting gallery from server: ', err);
    }) // end .catch, end axios.get
  } // end getGallery const

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} getGallery={getGallery}/>
      </div>
    );
}

export default App;
