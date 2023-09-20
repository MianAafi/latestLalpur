import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const Sidebar = () => {
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Button</MenuItem>
            <MenuItem>Input</MenuItem>
          </SubMenu>
          <MenuItem>Settings</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
