import React from "react";
import DropMenu from "./DropMenu";
import {
  FileData,
  EditData,
  InsertData,
  ViewData,
  HelpData,
} from "../MockData.js";

function AccessBar() {
  console.log(FileData);
  return (
    <div className="flex space-x-2 bg-black p-2 ">
      <DropMenu data={FileData} />
      <DropMenu data={EditData} />
      <DropMenu data={InsertData} />
      <DropMenu data={ViewData} />
      <DropMenu data={HelpData} />
    </div>
  );
}

export default AccessBar;
