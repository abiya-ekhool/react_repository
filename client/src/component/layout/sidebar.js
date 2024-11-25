import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-dark text-white vh-100 position-fixed" style={{ top: '40px', width: '250px' }}>
            <ul className="nav flex-column mt-3">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#profile">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#settings">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#logout">Logout</a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
