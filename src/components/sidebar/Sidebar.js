import React from "react";
import { Icon } from 'semantic-ui-react';
import './sidebar.css';


export const Sidebar = (props) => {

  const buttons = () => {
    return props.tabs.map(tab => {
      return (
        <React.Fragment>
          <Icon fitted='true' name={tab.iconName} size='huge' onClick={() => props.mode(tab.name)}/>
          <h3 onClick={() => props.mode(tab.name)}>{tab.displayName}</h3>
        </React.Fragment>
      );
    })
  };

  return (
    <div className='sidebar'>
      {buttons()}
    </div>
  );
};
