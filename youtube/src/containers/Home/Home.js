import React from "react";
import SideBar from "containers/SideBar/SideBar";
import ImageGrid from "containers/ImageViewer/ImageGrid";
import 'styles/Home.scss'


const Home = () => {
    return (
        <React.Fragment>
            <SideBar/>
            <div className='home'>
                <ImageGrid title='trending'/>
                <ImageGrid title='trending2' hideDivider={true} />
            </div>
        </React.Fragment>
    )
}


export default Home