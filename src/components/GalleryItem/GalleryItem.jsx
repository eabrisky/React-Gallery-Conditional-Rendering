import './GalleryItem.css';
import axios from 'axios';

function GalleryItem({description, likes, path, id, getGallery}) {
  
    const handleLike = (id) => {
        
            axios.put(`/gallery/like/${id}`)
            .then(response => {
              console.log(response);
              getGallery();
            }) // end .then
            .catch(err => {
              console.log(err);
            }) // end .catch, end axios.put
           // end updateGallery const
    } // end handleLike const

    return (
        <>
            <p>in GalleryItem</p>
            <img src={path} height={150} width={250}/>
            <p> </p>
            <p>{description}</p>
            <button onClick={() => handleLike(id)}>Like</button>
            <p>{likes} people like this photo!</p>
        </>
    ) // end return
} // end GalleryItem fn

export default GalleryItem;