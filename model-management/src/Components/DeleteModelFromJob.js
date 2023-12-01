import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function DeleteModelFromJob() {
    const [models, setModels] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

    useEffect(() => {
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
            });            // Updating the models state with the fetched data
            console.log("Fetched data:", response.data);

            setModels(response.data);
        } catch (error) {
            // Handle any errors here
            console.error('Error fetching models:', error);
        }
    };
    
    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:7181/api/Jobs', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'accept': 'text/plain'
                }
            });
            console.log('Fetched jobs:', response.data);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const deleteModelFromJob = async (modelId, jobId) => {
        console.log(`Attempting to delete model ID ${modelId} from job ID ${jobId}`);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`http://localhost:7181/api/Jobs/${jobId}/model/${modelId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'accept': 'text/plain'
                }
            });
            console.log('Delete response:', response.data);
            alert('Model removed from job successfully');
        } catch (error) {
            console.error('Error removing model from job:', error);
            alert('Failed to remove model from job');
        }
    };

    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        console.log(`Submitting deletion with model ID: ${selectedModel} and job ID: ${selectedJob}`);
        await deleteModelFromJob(selectedModel, selectedJob);
    };

    return (
        <div className="container"> 
            <h1>Delete Model from Job</h1>
            <form onSubmit={handleDeleteSubmit} className="form-shared"> 
            <div>
                <label>
                    Model:
                    <select 
                    form-shared select
                    value={selectedModel} 
                    onChange={(e) => {
                        console.log('Selected model ID:', e.target.value); // Log the selected value
                        setSelectedModel(e.target.value);
                    }}>
                        <option value="" disabled>Choose model</option>
                        {models.map(model => (
                            <option key={model.efModelId} value={model.efModelId}>
                                {model.firstName} {model.lastName} - {model.email}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
                <div>
                    <label>
                        Job:
                        <select 
                    form-shared select
                    value={selectedJob} 
                        onChange={(e) => {
                            console.log('Selected job ID:', e.target.value);
                            setSelectedJob(e.target.value);
                        }}>
                            <option value="" disabled>Choose job</option>
                            {jobs.map(job => (
                                <option key={job.efJobId} value={job.jobId}>
                                    {job.customer} - {new Date(job.startDate).toLocaleDateString()} - {job.location}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <button type="submit">Remove Model from Job</button>
            </form>
        </div>
    );
}
