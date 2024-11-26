import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '60px', // Adjust for header height
                left: '0',
                width: '250px',
                height: '100%',
                backgroundColor: '#f8f9fa',
                borderRight: '1px solid #dee2e6',
                padding: '20px',
            }}
        >
            <nav>
                <ul className="list-unstyled">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'text-primary fw-bold' : 'text-dark'
                            }
                            style={{ textDecoration: 'none', padding: '10px 0', display: 'block' }}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                isActive ? 'text-primary fw-bold' : 'text-dark'
                            }
                            style={{ textDecoration: 'none', padding: '10px 0', display: 'block' }}
                        >
                            users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                isActive ? 'text-primary fw-bold' : 'text-dark'
                            }
                            style={{ textDecoration: 'none', padding: '10px 0', display: 'block' }}
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
