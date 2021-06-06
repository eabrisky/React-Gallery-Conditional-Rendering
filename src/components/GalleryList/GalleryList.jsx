import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {

    return (
        <>
            <p>in GalleryList</p>
            <p>Gallery Items Go here</p>
            <div>
                {galleryList.map(pic =>
                    <GalleryItem key={pic.id} description={pic.description} likes={pic.likes} path={pic.path} id={pic.id}/>)}
            </div>
        </>
    ) // end return
} // end GalleryList fn

export default GalleryList;