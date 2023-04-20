import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container md:flex justify-between items-center px-4 py-5  sticky top-0 bg-gray-50 text-center'>
            <h3 className='text-3xl font-semibold text-gray-800' >Job Central</h3>
            <div className='flex md:gap-8 gap-3 text-gray-600 text-base font-medium my-3 md:my-0'>
                <NavLink className={({isActive})=>( isActive ? 'active':'default')} to='/'>Home</NavLink>
                <NavLink className={({isActive})=>( isActive ? 'active':'default')} to='/statistics'>Statistics</NavLink>
                <NavLink className={({isActive})=>( isActive ? 'active':'default')} to='/applied_jobs'>Applied Jobs</NavLink>
                <NavLink className={({isActive})=>( isActive ? 'active':'default')} to='/blog'>Blog</NavLink>
            </div>
            <button className='button-primary'>Start Applying</button>
        </div>
    );
};

export default Header;