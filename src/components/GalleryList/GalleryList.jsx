import './GalleryList.css;'
import GalleryItem from '..GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
    return (
        <>
            <p>in GalleryList</p>
            <p>Gallery Items Go here</p>
            <GalleryItem galleryList={galleryList}/>
        </>
    ) // end return
} // end GalleryList fn

export default GalleryList;