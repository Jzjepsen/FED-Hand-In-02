import React, { useState } from 'react';
import axios from 'axios';

export function AddNewJob(){
const[customer, setCustomer]=useState('');
const [startDate, setStartDate] = useState('');
const [startTime, setStartTime] = useState('');
const[days,setDays]=useState();
const [location, setLocation] = useState('');
const[comments, setComments]=useState('');
const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        const token = localStorage.getItem('token'); 

    event.preventDefault();
    const dateTime =`${startDate}T${startTime}:00.000Z`; // Adding default seconds and milliseconds
    try {
        const response = await axios.post('http://localhost:7181/api/Jobs', {customer,startDate:dateTime,days,location,comments},
        { headers: { 'Authorization': `Bearer ${token}` } });

        console.log("Job added")
    } catch (error) {
        console.error('Error submitting form:', error);
        setError('Submit fejlede. Tjek at du har udfyldt alle de påkrævede felter.');
    }
};
    return(
        <div className="container"> 
        <h2>Add a new job</h2>
        <p>Enter job-information in the following text-boxes:</p>
        <form onSubmit={handleSubmit}>
            <input
                className="form-input" 
                type="text"
                value={customer}
                onChange={(e)=>setCustomer(e.target.value)}
                placeholder="Customer"
                required
            />
           <input
                className="form-input" 
                type="date"
                value={startDate || '' }
                onChange={(e) => setStartDate(e.target.value)}
                placeholder= 'Start Date'
                required
            />
            <input
                className="form-input" 
                type="time"
                value={startTime ||'' }
                onChange={(e) => setStartTime(e.target.value)}
                placeholder='Start Time'
                required
            />
            <input
                className="form-input" 
                type="number"
                value={days}
                onChange={(e)=>setDays(e.target.value)}
                placeholder="Days"
                required
            />
            <input
                className="form-input" 
                type="text"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder="Location"
                required
            />
            <input
                className="form-input" 
                type="text"
                value={comments}
                onChange={(e)=>setComments(e.target.value)}
                placeholder="Comments"
                required
            />
                <button type="submit" className="form-button">
                Add job
                </button>
            {error && <p>{error}</p>}
        </form>
        </div>
    );
}