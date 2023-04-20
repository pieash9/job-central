import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const CardJobDetails = ({
  singleJobDetails: singleJobDetailsData,
  handleJobDetails,
}) => {
  const {
    id,
    companyLogo,
    companyName,
    jobTitle,
    fulltimeOrPartTime,
    remoteOrOnsite,
    location,
    salary,
  } = singleJobDetailsData;
  return (
    <div className="border border-gray-300 p-10 rounded-lg w-full md:mx-0 mx-3 bg-gray-50">
      <img className="h-10" src={companyLogo} alt="" />
      <h4 className="text-2xl font-semibold text-gray-700 mt-6">{jobTitle}</h4>
      <p className="font-medium text-xl text-gray-500 my-2 ">{companyName}</p>
      <div className="flex gap-2 mt-4">
        <p className="text-gradient px-4 py-1 font-bold border-2 rounded border-opacity-30 border-purple-900">
          {remoteOrOnsite}
        </p>
        <p className="text-gradient px-4 py-1 font-bold border-2 rounded border-opacity-30 border-purple-900">
          {fulltimeOrPartTime}
        </p>
      </div>
      <div className="md:flex items-center gap-6">
        <div className="flex items-center gap-1 mt-4 ">
          <HiOutlineLocationMarker className="text-xl text-gray-500" />
          <p className="text-gray-500 text-lg font-medium">{location}</p>
        </div>
        <div className="flex items-center gap-1 mt-4 ">
          <HiOutlineCurrencyDollar className="text-xl text-gray-500" />
          <p className="text-gray-500 text-lg font-medium">Salary: {salary}</p>
        </div>
      </div>
      <Link to={`../job_details/${id}`}>
        <button className="button-secondary my-6">View Details</button>
      </Link>
    </div>
  );
};

export default CardJobDetails;
