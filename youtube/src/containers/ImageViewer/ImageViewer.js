import React from "react";
import {Image} from "semantic-ui-react";
import 'styles/ImageViewer.scss'


const ImageViewer = () => {
    return (
        <div className='image-viewer'>
            <div className='image-container'>
                <Image src='http://via.placeholder.com/210x118'/>
                <div className='time-label'>
                    <span>05:22</span>
                </div>
            </div>

            <div className='image-info'>
                <div className='semi-bold show-max-two-lines'>title</div>
                <div className='image-viewer-metadata-container'>
                    <div className='channel-title'>Channel title</div>
                    <div><span>2.1M view</span></div>
                </div>
            </div>
        </div>
    )
}


export default ImageViewer