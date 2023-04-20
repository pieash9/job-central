import React from 'react';

const CardJobCategory = ({job}) => {
    const {logo,jobs_available,job_category_name} = job
    return (
        <div className='border border-gray-200 bg-gray-50 p-5 rounded-lg w-full md:mx-0 mx-3'>
            <img className='w-10 h-10' src={logo} alt="" />
            <h4 className='text-xl text-gray-600 my-2 font-bold'>{job_category_name}</h4>
            <p className='text-gray-400 font-medium'>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default CardJobCategory;