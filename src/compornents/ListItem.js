import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li>{`${item.name}さん ${item.age}歳`}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListItem;
