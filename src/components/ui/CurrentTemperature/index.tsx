import React from "react";

interface CurrentTemperatureProps {
  currentTemperature: number;
}

export const CurrentTemperature = ({
  currentTemperature,
}: CurrentTemperatureProps) => {
  return (
    <span className="text-9xl font-inter font-thin text-white relative">
      {currentTemperature}
      <span className="text-3xl font-inter font-extralight absolute -right-14 top-6">
        ° C{" "}
      </span>
    </span>
  );
};
