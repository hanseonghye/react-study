import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types';

import './Header.css'

const MenuItem = ({ active, children, to }) => (
  <Link to={to} className={`menu-item ${active ? 'active' :''}`}>
    {children}
  </Link>
)


const Header = (props, context) => {
  const { router } = context
  return (
    <div>
      <div className="logo">
        title
      </div>
      <div className="menu">
        <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
        <MenuItem to={'/about'} active={router.isActive('/about', true)}>소개</MenuItem>
        <MenuItem to={'/post'} active={router.isActive('/post', true)}>포스트</MenuItem>
      </div>
    </div>
  )
}


Header.contextTypes = {
  router: PropTypes.object.isRequired,
}


export default Header