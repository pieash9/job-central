import React, { useContext, useState } from "react";
import { JobDetailsContext } from "../../App";
import CardJobDetails from "./CardJobDetails";

const FeaturedJobs = () => {
  const jobDetailsData = useContext(JobDetailsContext);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };
  // console.log(jobDetails)
  return (
    <div className="mt-20 md:mx-0 mx-3">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-700">Featured Jobs</h3>
        <p className="text-gray-600 my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-5 w-full mt-10">
        {jobDetailsData
          .slice(0, showAll ? 6 : 4)
          .map((singleJobDetailsData) => (
            <CardJobDetails
              key={singleJobDetailsData.id}
              singleJobDetails={singleJobDetailsData}
            />
          ))}
      </div>
      {!showAll && (
        <div className="text-center md:mt-12">
          <button onClick={handleShowAll} className="btn button-primary">
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
