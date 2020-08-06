import React from 'react'
import ImageViewer from "containers/ImageViewer/ImageViewer";
import ImageGridHeader from "containers/ImageViewer/ImageGridHeader";
import {Divider} from "semantic-ui-react";
import 'styles/ImageGrid.scss'


const ImageGrid = (props) => {
    const divider = props.hideDivider ? null : <Divider/>
    return (
        <React.Fragment>
            <ImageGridHeader title='Trending'/>
            <div className='image-grid'>
                <ImageViewer/>
                <ImageViewer/>
                <ImageViewer/>
                <ImageViewer/>
            </div>
            {divider}
        </React.Fragment>
    )
}


export default ImageGrid