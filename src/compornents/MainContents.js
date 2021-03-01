import React, { useState } from "react";
import ListItem from "./ListItem.js";
import Container from "./Container.js";

const MainContents = () => {
  const [inputText, setInputText] = useState("");

  const onChangeText = (event) => {
    console.log("onChangeText : " + event.target.value);
    setInputText(event.target.value);
  };
  const onClickSubmit = (event) => {
    // alert(inputText);
  };
  const items = [
    { name: "田中", age: "20" },
    { name: "佐藤", age: "30" },
    { name: "吉川", age: "80" },
  ];

  return (
    <div className="MainContents">
      <div className="container">
        {/* <div className="row"> */}
        <h2>入力フォーム</h2>
        <input
          type="text"
          placeholder="名前を入力"
          size="40"
          maxLength="20"
          onChange={onChangeText}
        />
        <input type="submit" value="クリック" onClick={onClickSubmit} />
        <p>{inputText}</p>

        <ListItem items={items} />
        <Container />
        </div>
      </div>
    // </div>
  );
};

export default MainContents;
