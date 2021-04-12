import { React } from "react";

const Gallery = (props) => {
    
    const photo = props.photos.map(item => (
        <div className="col-md-4">
            <div className="bg" style={{backgroundImage: `url(${item})`}}></div>
        </div>
    ))

    return (
            <div className="container animals-gallery">
                <div className="row">
                        {photo}
                </div>
            </div>
    );
}

export default Gallery;