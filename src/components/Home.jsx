import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='my-container mt-16'>
            <Banner/>
            <JobCategory/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;