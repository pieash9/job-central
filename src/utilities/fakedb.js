import { ToastContainer } from 'react-toastify';
// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        alert('You Cant apply more than one')
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-jobs');
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart);
    }
    return appliedJobs;
}

const deleteAppliedJobs = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}
