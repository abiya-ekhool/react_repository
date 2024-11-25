import React from 'react';
import AdminHeader from './admin_header';
import Sidebar from './sidebar';

const SiteLayout = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            <Sidebar />
            <main className="container-fluid" style={{ marginTop: '60px', marginLeft: '250px', padding: '20px', overflowX: 'hidden'  }}>
                {children}
            </main>
        </div>
    );
};

export default SiteLayout;
