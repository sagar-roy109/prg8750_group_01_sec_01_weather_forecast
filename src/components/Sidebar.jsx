import React, { useState } from 'react';
import { FaTh, FaBars, FaUpload, FaEdit, FaRemoveFormat } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/login';
  };
  const menuItem = [
    {
      path: '/user',
      name: 'Dashboard',
      icon: <FaTh />,
    },

    {
      path: '/add',
      name: 'Add',
      icon: <FaUpload />,
    },
  ];
  return (
    <div className='mycontainer'>
      <div style={{ width: isOpen ? '300px' : '50px' }} className='sidebar'>
        <div className='top_section'>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
            Profile
          </h1>

          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <button onClick={logout} className='btn btn-primary'>
          Log Out
        </button>
        <br></br>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className='link'>
            <div className='icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
