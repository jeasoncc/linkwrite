import React from "react";
import { LuCalendarPlus, LuRefreshCw, LuSearch, LuTrash } from "react-icons/lu";

export interface IconItem {
  content: string;
  icon: React.ReactElement;
  onclickFn: () => void;
}
export function makeIncoListFn({ insertFn, deleteFn, searchFn }) {
  return [
    {
      content: "Add a new Document",
      icon: <LuCalendarPlus />,
      onclickFn: () => {
        insertFn()
        console.log(insertFn)
      },
    },
    {
      content: "Delete All Documents",
      icon: <LuTrash />,
      onclickFn: () => {
        deleteFn();
      },
    },
    {
      content: "Refrese",
      icon: <LuSearch />,
      onclickFn: () => {
        searchFn();
      },
    },
  ];
}
