import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, getGallery}) {

    return (
        <>
            <div>
                {galleryList.map(pic =>
                    <GalleryItem key={pic.id} description={pic.description} likes={pic.likes} path={pic.path} id={pic.id} getGallery={getGallery}/>)}
            </div>
        </>
    ) // end return
} // end GalleryList fn

export default GalleryList;