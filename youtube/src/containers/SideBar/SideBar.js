import React from 'react'
import {Menu, Divider} from "semantic-ui-react";
import SideBarItem from "containers/SideBar/SideBarItem";
import SideBarHeader from "containers/SideBar/SideBarHeader";
import SideBarFooter from 'containers/SideBar/SideBarFooter'
import Subscriptions from 'containers/SideBar/Subscriptions'
import 'styles/SideBar.scss'


export class SideBar extends React.Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SideBarItem highligt={true} label='Home' icon='home'/>
                <SideBarItem label='Trending' icon='fire'/>
                <SideBarItem label='Followers' icon='spy'/>
                <Divider/>
                <SideBarHeader title='Library'/>
                <SideBarItem label='History' icon='history'/>
                <SideBarItem label='Watch later' icon='clock'/>
                <SideBarItem label='Liked videos' icon='thumbs up'/>
                <Divider/>
                <Subscriptions/>
                <SideBarHeader title='More from Youtube'/>
                <SideBarItem label='Movies and Shows' icon='film'/>
                <Divider/>
                <SideBarItem label='Report history' icon='flag'/>
                <SideBarItem label='Help' icon='help circle'/>
                <SideBarItem label='Send feedback' icon='comment'/>
                <Divider/>
                <SideBarFooter/>
            </Menu>
        )
    }
}

export default SideBar