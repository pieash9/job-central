import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar,HiOutlineMail,HiOutlineLocationMarker } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { addToDb } from "../utilities/fakedb";

const JobDetails = () => {
  const JobData = useLoaderData();
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});

  //handle applied jobs
  const handleAppliedJobs =(detailsData) =>{
    addToDb(detailsData.id)
  }

  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    phone,
    address,
    email
  } = detailsData;

  useEffect(() => {
    if (JobData) {
      const detailsD = JobData.find((singleData) => singleData.id == id);
      setDetailsData(detailsD);
    }
  }, []);
  

  return (
    <>
      <div className="text-center bg-gray-100 mb-8">
        <h3 className="text-3xl font-semibold text-gray-700 py-10">
          Job Details
        </h3>
      </div>

      <div className="my-container md:grid md:grid-cols-[3fr_2fr]  gap-6 p-3">
        <div className="text-justify">
          <h3 className="text-gray-500">
            <span className="font-semibold text-gray-800">
              Job Description:
            </span>{" "}
            {jobDescription}
          </h3>
          <h3 className="text-gray-500 my-5">
            <span className="font-semibold text-gray-800">
              Job Responsibility:
            </span>{" "}
            {jobResponsibility}
          </h3>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Educational Requirements:
            </h3>
            <p className="text-gray-500">{educationalRequirements}</p>
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-gray-800 mb-1">Experiences:</h3>
            <p className="text-gray-500">{experiences}</p>
          </div>
        </div>

        {/* card  */}
        <div className="bg-gray-100 md:p-7 p-3">
          <h3 className="font-semibold text-gray-800 text-xl">Job Details</h3>
          <div className="flex items-center gap-1 mt-4 ">
            <HiOutlineCurrencyDollar className="text-xl text-gray-500" />
            <p className="text-gray-500 text-lg ">
              <span className="font-medium text-gray-800">Salary:</span> {salary} (Per Month)
            </p>
          </div>
          <div className="flex items-center gap-1 mt-2 ">
            <CgBriefcase className="text-xl text-gray-500" />
            <p className="text-gray-500 text-lg ">
              <span className="font-medium text-gray-800">Job Title :</span> {jobTitle} 
            </p>
          </div>
          <p className="font-semibold text-gray-800 text-xl my-6">Contact Information</p>

          <div className="flex items-center gap-1 mt-2 ">
            <BsTelephone className="text-xl text-gray-500" />
            <p className="text-gray-500 text-lg ">
              <span className="font-medium text-gray-800">Phone :</span> {phone} 
            </p>
          </div>
          <div className="flex items-center gap-1 my-3 ">
            <HiOutlineMail className="text-xl text-gray-500" />
            <p className="text-gray-500 text-lg ">
              <span className="font-medium text-gray-800">Email :</span> {email} 
            </p>
          </div>
          <div className="flex items-center gap-1 mt-2 ">
            <HiOutlineLocationMarker className="text-xl text-gray-500" />
            <p className="text-gray-500 text-lg ">
              <span className="font-medium text-gray-800">Address :</span> {address} 
            </p>
          </div>
          <button onClick={()=>handleAppliedJobs(detailsData)} className="button-primary w-full mt-10">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
