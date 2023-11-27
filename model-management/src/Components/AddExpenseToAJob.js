import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function AddExpenseToAJob() { 
    const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState('');
  const [expenseText, setExpenseText] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [modelId, setModelId] = useState(null); 


  // FETCHING JOBS DOES NOT WORK!
  useEffect(() => {
    if (modelId !== null) {
      fetchJobs();
    }
  }, [modelId]);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:7181/api/Models/${modelId}/jobs`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };


  const handleAddExpense = async () => {
    try {
      const expenseData = {
        efExpenseId: 0,
        jobId: selectedJobId,
        text: expenseText,
        amount: expenseAmount,
      };

      const response = await axios.put(
        'http://localhost:7181/api/Expenses/1',
        expenseData,
        {
          headers: {
            'Authorization': 'Bearer yourAccessTokenHere',
            'Content-Type': 'application/json',
          },
        }
      );

      // Assuming the response contains the updated expense data
      const updatedExpense = response.data;

      // You can handle the response data here, for example, updating your UI or state.
      console.log('Expense added:', updatedExpense);

      // Optionally, you can clear the form or reset the state.
      setSelectedJobId('');
      setExpenseText('');
      setExpenseAmount('');
    } catch (error) {
      // Handle any errors that may occur during the API call
      console.error('Error adding expense:', error);
    }
  };

  const handleJobChange = (e) => {
    setSelectedJobId(e.target.value);
  };

  return (
    <div>
      <p>Model page</p>
      <form>
        <div>
          <label>Choose a Job:</label>
          <select value={selectedJobId} onChange={handleJobChange}>
            <option value="">Select a Job</option>
            {jobs.map((job) => (
              <option key={job.jobId} value={job.jobId}>
                    {job.customer} - {new Date(job.startDate).toLocaleDateString()} - {job.location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Text:</label>
          <input
            type="text"
            value={expenseText}
            onChange={(e) => setExpenseText(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </form>
    </div>
  );
}
