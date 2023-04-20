import React, { useContext, useEffect, useState } from "react";
import { JobDetailsContext } from "../App";
import { getAppliedJobs } from "../utilities/fakedb";
import CardAppliedJobs from "./CardAppliedJobs";

const AppliedJobs = () => {
  const allJobDetailsData = useContext(JobDetailsContext);
  const [appliedJob, setAppliedJob] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("all");

  //filter change
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  //! filter on select option
  
  const filteredData = appliedJob.filter((data) => {
    if (selectedFilter === "all") {
      return true;
    } else if (selectedFilter === "onsite") {
      return data.remoteOrOnsite === "Onsite";
    } else if (selectedFilter === "remote") {
      return data.remoteOrOnsite === "Remote";
    }
  });
  console.log(filteredData);


  useEffect(() => {
    let savedJobs = [];
    const savedAppliedJobs = getAppliedJobs();

    for (const id in savedAppliedJobs) {
      const foundJobs = allJobDetailsData.find((SJobs) => SJobs.id == id);
      if (foundJobs) {
        savedJobs.push(foundJobs);
      }
    }
    setAppliedJob(savedJobs);
  }, []);
  return (
    <>
      <div className=" bg-gray-100 mb-8">
        <h3 className="text-3xl font-semibold text-gray-700 py-10 text-center">
          Applied Jobs
        </h3>
      </div>
      <div className="my-container mx-3">
        <div className="text-end ">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="select select-bordered select-sm  max-w-xs text-lg "
          >
            <option disabled selected>
              Filter By
            </option>
            <option value="all">all job</option>
            <option value="remote">remote job</option>
            <option value="onsite">on-site job</option>
          </select>
        </div>

        {/* list card item  */}
        <div className="grid grid-cols-1 gap-6 mt-8">
          {filteredData.length >0 ? (
            filteredData.map((singleAppliedJob) => (
              <CardAppliedJobs
                key={singleAppliedJob.id}
                singleAppliedJob={singleAppliedJob}
              />
            ))
          ) : (
            <p className="text-2xl text-warning text-center -mt-10">You did not added any job !!</p>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AppliedJobs;
