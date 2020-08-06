import React from 'react'
import Subscription from "containers/SideBar/Subscription";
import SideBarHeader from 'containers/SideBar/SideBarHeader'
import {Divider} from "semantic-ui-react";


const Subscriptions = () => {
    return (
        <React.Fragment>
            <SideBarHeader title='Subscriptions'/>
            <Subscription label='MusicChannel' broadcasting/>
            <Subscription label='Coursea' amountNewVideos={10}/>
            <Subscription label='TEDx Talks' amountNewVideos={23}/>
            <Subscription label='Stanford iOS' amountNewVideos={4}/>
            <Subscription label='Udacity' amountNewVideos={114}/>
            <Divider/>
        </React.Fragment>

    )
}


export default Subscriptions