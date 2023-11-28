import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function ListOfJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await axios.get('http://localhost:7181/api/Jobs', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': 'text/plain'
                }
            });
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };
    
    return (
        <div className="container"> 
            <h1>List of Jobs</h1>
            <table className="table-shared"> 
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Start Date</th>
                        <th>Location</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.efJobId}>
                            <td>{job.customer}</td>
                            <td>{new Date(job.startDate).toLocaleDateString()}</td>
                            <td>{job.location}</td>
                            <td>{job.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
