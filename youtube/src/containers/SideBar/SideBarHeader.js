import React from 'react'
import {Menu} from 'semantic-ui-react'
import 'styles/SideBarHeader.scss'


const SideBarHeader = ({title}) => {
    const heading = title ? title.toUpperCase() : ''
    return (
        <Menu.Item>
            <Menu.Header className='side-bar-header'>{heading}</Menu.Header>
        </Menu.Item>
    )
}


export default SideBarHeader