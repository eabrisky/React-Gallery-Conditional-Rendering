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
           
    } // end handleLike const

    const galleryHandler = () => {
        if (likes=0) {
            return (
                <p>{description}</p>
            )
        } else {
            return(
                <img src={path} height={150} width={250}/>
            )
        }
    } // end galleryHandler const

    return (
        <>
            <p>in GalleryItem</p>
            {galleryHandler()}
            <p> </p>
            <button onClick={() => handleLike(id)}>Like</button>
            <p>{likes} people like this photo!</p>
        </>
    ) // end return
} // end GalleryItem fn

export default GalleryItem;