import React, { useEffect, useState } from "react";
import CardJobCategory from "./CardJobCategory";

const JobCategory = () => {
  const [jobData, setJobData] = useState([]);
  // console.log(jobData);
  useEffect(() => {
    fetch(`job_category.json`)
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-700">
          Job Category List
        </h3>
        <p className="text-gray-600 my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-5">
        {jobData.map((job) => (
          <CardJobCategory key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
