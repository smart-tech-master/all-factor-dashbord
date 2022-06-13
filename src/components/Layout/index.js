import React from 'react';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className="c-layout">
    {children}
  </div>
);

const LayoutSidebar = ({ children }) => (
  <div className="c-layout__sidebar">
    {children}
  </div>
);

const LayoutMain = ({ children }) => (
  <div className="c-layout__main">
    {children}
  </div>
);

Layout.Sidebar = LayoutSidebar;
Layout.Main = LayoutMain;

export default Layout;
