import React from "react";
import { LuCalendarPlus, LuRefreshCw, LuTrash } from "react-icons/lu";

export function incoListFn({ createDocumentFn }) {
  return [
    {
      content: "Add a new Document",
      icon: <LuCalendarPlus />,
      onclickFn: () => {
        createDocumentFn();
      },
    },
    {
      content: "Delete All Documents",
      icon: <LuTrash />,
      onclickFn: () => {
        console.log("haha");
      },
    },
    {
      content: "Refrese",
      icon: <LuRefreshCw />,
      onclickFn: () => {
        console.log("haha");
      },
    },
  ];
}
