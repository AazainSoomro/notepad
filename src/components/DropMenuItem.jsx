import React from "react";

function DropMenuItem({ item }) {
  //   console.log("check: ", item);
  return (
    <div className=" flex relative bg-black  ">
      {item.Icon}
      {/* <img src={item.Icon} alt="" /> */}
      <h1>{item.Title}</h1>

      <h1 className="text-gray-500">{item.ShortKey}</h1>
    </div>
  );
}

export default DropMenuItem;
