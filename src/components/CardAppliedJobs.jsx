import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const CardAppliedJobs = ({ singleAppliedJob }) => {
  const {
    companyLogo,
    remoteOrOnsite,
    fulltimeOrPartTime,
    location,
    salary,
    jobTitle,
    companyName,
  } = singleAppliedJob;
  return (
    <div className="flex justify-between items-center border border-gray-200 p-6  rounded-lg">
      <div className="md:flex items-center gap-8">
        <div className="w-56 md:mb-0 mb-8">
          <img className="h-12" src={companyLogo} alt="" />
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-gray-700">
            {jobTitle}
          </h4>
          <p className="font-medium text-xl text-gray-500 my-2 ">
            {companyName}
          </p>
          <div className="flex gap-2 mt-4">
            <p className="text-gradient px-4 py-1 font-bold border-2 rounded border-opacity-30 border-purple-900">
              {remoteOrOnsite}
            </p>
            <p className="text-gradient px-4 py-1 font-bold border-2 rounded border-opacity-30 border-purple-900">
              {fulltimeOrPartTime}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 mt-4 ">
              <HiOutlineLocationMarker className="text-xl text-gray-500" />
              <p className="text-gray-500 text-lg font-medium">{location}</p>
            </div>
            <div className="flex items-center gap-1 mt-4 ">
              <HiOutlineCurrencyDollar className="text-xl text-gray-500" />
              <p className="text-gray-500 text-lg font-medium">
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="button-primary">View Details</button>
    </div>
  );
};

export default CardAppliedJobs;
