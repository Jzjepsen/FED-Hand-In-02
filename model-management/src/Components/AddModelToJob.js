import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function AddModelToJob() {
    const [models, setModels] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

    useEffect(() => {
        // Fetch models and jobs when component mounts
        fetchModels();
        fetchJobs();
    }, []);

    const fetchModels = async () => {
        try {
            const token = localStorage.getItem('token');
            // Making a GET request to  API endpoint
            const response = await axios.get(`http://localhost:7181/api/Models`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });  
            console.log('Received response data:', response.data);

            setModels(response.data);
        } catch (error) {
            // Handle any errors here
            console.error('Error fetching models:', error);
        }
    };
    

    const fetchJobs = async () => {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');

            // Making a GET request to your API endpoint with the Authorization header
            const response = await axios.get('http://localhost:7181/api/Jobs', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'accept': 'text/plain'
                }
            });
    
            // Updating the jobs state with the fetched data
            setJobs(response.data);
            console.log('Fetched jobs:', response.data);
        } catch (error) {
            // Handle any errors here
            console.error('Error fetching jobs:', error);
        }
    };
    

    const addModelToJob = async (modelId, jobId) => {
        console.log('Adding model to job:', { modelId, jobId }); // Log the IDs

        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');
    
            // Making the POST request
            const response = await axios.post(`http://localhost:7181/api/Jobs/${jobId}/model/${modelId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'accept': 'text/plain'
                }
            });
    
            // Handling the response
            console.log('Response:', response.data);
            alert('Model added to job successfully');
        } catch (error) {
            // Handle any errors here
            console.error('Error adding model to job:', error);
            alert('Failed to add model to job');
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addModelToJob(selectedModel, selectedJob);
    };
    

    return (
        <div className="container"> 
            <h1>Add Model to Job</h1>
            <form onSubmit={handleSubmit} className="form-shared"> 
                <label>
                    Model:
                    <select 
                    form-shared select
                    value={selectedModel}
                     onChange={(e) => {
                        console.log('Selected model ID:', e.target.value); // Log the selected model ID
                        setSelectedModel(e.target.value);
                            }}>

                    <option value="" disabled >Choose model</option>
                        {models.map(model => (
                            <option key={model.efModelId} value={model.efModelId}>
                                {model.firstName} {model.lastName} - {model.email}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Job:
                     <select
                    form-shared select
                    value={selectedJob} 
                    
                     onChange={(e) => {
                        console.log('Selected job ID:', e.target.value); // Log the selected job ID
                        setSelectedJob(e.target.value);
                            }}>
                    <option value="" disabled >Choose job</option>
                        {jobs.map(job => (
                            <option key={job.efJobId} value={job.jobId}>
                             {job.customer} - {new Date(job.startDate).toLocaleDateString()} - {job.location}
                        </option>
                    ))}
                </select>
                </label>
                <br />
                <button type="submit"className="form-button">
                    Add Model to Job
                </button>
            </form>
        </div>
    );
}


