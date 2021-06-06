import './GalleryItem.css';
import axios from 'axios'; // bring in axios so you can use put route
import { useState } from 'react';

function GalleryItem({description, likes, path, id, getGallery,}) {

    const [hidden, setHidden] = useState(true);

    // put route can go here since we don't need it in app.jsx

    const handleLike = (id) => {
        
            axios.put(`/gallery/like/${id}`)
            .then(response => {
              console.log(response);
              getGallery(); // reload the page
            }) // end .then
            .catch(err => {
              console.log(err);
            }) // end .catch, end axios.put
           
    } // end handleLike const

    const galleryHandler = () => {
    
        if (hidden === false) {
            return (
                <p onClick={() => setHidden(!hidden)} >{description}</p>
            )
        } else {
            return(
                <img src={path} height={150} width={250} onClick={() => setHidden(!hidden)}/>
            )
        }

    } // end galleryHandler const

    return (
        <>
            {galleryHandler(id)}
            {/* ^ const to conditionally render either image or description */}
            <p> </p>
            <button onClick={() => handleLike(id)} className="btn btn-info">Like</button>
            <p>{likes} people like this photo!</p>
        </>
    ) // end return
} // end GalleryItem fn

export default GalleryItem;