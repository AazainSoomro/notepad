import React, { useState } from "react";
import { FcDocument } from "react-icons/fc";
import DropMenuItem from "./DropMenuItem";
import { IoMdArrowDropdown } from "react-icons/io";

function DropMenu({ data }) {
  const [Menu, setMenu] = useState(false);

  const MenuDrop = () => {
    setMenu(!Menu);
  };

  return (
    <div>
      <div className=" text-gray-300 p-2 relative">
        <div className="flex items-center ">
          <button onMouseLeave={MenuDrop} onMouseEnter={MenuDrop}>
            {data[0].Title}
          </button>
          <IoMdArrowDropdown className="pt-1" />
        </div>
        <div className="absolute b-0 l-0 w-[300px]  ">
          {Menu &&
            data.map(
              (item, index) =>
                item.id != 1 && (
                  <DropMenuItem key={index} item={item} />
                  // <div className=" flex relative bg-black">
                  //   <img src={item.Icon} alt="" />
                  //   <h1>{item.Title}</h1>
                  //   <h1 className="text-gray-500">{item.ShortKey}</h1>
                  // </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
