import React from "react";
import 'styles/ImageGridHeader.scss'


const ImageGridHeader = (props) => {
    return (
        <div className='image-grid-header'>
            <span className='title'>{props.title}</span>
        </div>
    )
}


export default ImageGridHeader