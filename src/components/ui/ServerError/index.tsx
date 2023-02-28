import React from "react";
import { ReactComponent as ErrorIcon } from "../../../assets/error-icon.svg";

export const ServerError: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <ErrorIcon className="animate-pulse w-24 h-24 text-fuchsia-600 fill-current" />
      <p className="text-xl text-gray-600 tracking-wide font-medium">
        Failed to fetch data
      </p>
    </div>
  );
};
