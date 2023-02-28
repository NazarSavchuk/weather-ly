import React from "react";
import { getDayOfWeek } from "../../../utils/getDayOfWeek";
import { getMonthName } from "../../../utils/getMonthName";
import { getOrdinalSuffix } from "../../../utils/getOrdinalSuffix";

interface DataTimeProps {
  time: string;
}

export const CurrentDataTime = ({ time }: DataTimeProps) => {
  const date = new Date(time);

  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div>
      <div className="font-light text-4xl text-white tracking-wide">
        {day}
        <span>{getOrdinalSuffix(day)}</span>
        <span> {getMonthName(time)}</span>
        <span>{" '" + year.toString().slice(-2)}</span>
      </div>
      <div>
        <span>{getDayOfWeek(date)}</span>
      </div>
    </div>
  );
};
//"time": "2023-02-27T02:00"
