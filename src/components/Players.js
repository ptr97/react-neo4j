import React, { useEffect, useState } from "react";
import { getAllPlayers } from "../QueryService";


export const Players = (props) => {

  const [playersState, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  }, []);

  const displayPlayers = () => {
    return playersState.map(p =>
      (
        <tr>
          <td>{p['firstName']}</td>
          <td>{p['lastName']}</td>
          <td>{p['shirtNumber']}</td>
          <td>{p['height']}</td>
        </tr>
      )
    )
  };

  return (
    <div>
      <h1>Players Component</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Shirt Number</th>
          <th>Height</th>
        </tr>
        {displayPlayers()}
      </table>
    </div>
  );
};
