import React from "react";
import { Button } from 'semantic-ui-react'


export const Sidebar = (props) => {

  const buttons = () => {
    return props.tabs.map(tab => {
      return <Button key={tab['name'].toString()} onClick={() => props.mode(tab.name)}>{tab.displayName}</Button>
    })
  };

  return (buttons())
};
