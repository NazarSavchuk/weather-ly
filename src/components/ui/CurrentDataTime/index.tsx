import React from "react";
import { getDayOfWeek } from "../../../utils/getDayOfWeek";
import { getMonthName } from "../../../utils/getMonthName";
import { getOrdinalSuffix } from "../../../utils/getOrdinalSuffix";
import { getCurrentTime } from "../../../utils/getCurrentTime";

interface DataTimeProps {
  time: string;
}

export const CurrentDataTime = ({ time }: DataTimeProps) => {
  const date = new Date(time);

  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className=" mb-9">
      <div className="font-light text-4xl text-white tracking-wide mb-3">
        {day}
        <span>{getOrdinalSuffix(day)}</span>
        <span> {getMonthName(time)}</span>
        <span>{" '" + year.toString().slice(-2)}</span>
      </div>
      <div>
        <span className=" tracking-wider font-light text-white text-2xl ">
          {getDayOfWeek(date)} | {getCurrentTime()}
        </span>
      </div>
    </div>
  );
};
//"time": "2023-02-27T02:00"
