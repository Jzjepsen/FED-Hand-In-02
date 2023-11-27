import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your global CSS file

export function Model() {
  return (
    <div className="App"> {/* Apply the global App class */}
      <p>Model page</p>
      <Link to="/ListOfJobs">Go to List of Jobs</Link>
      <Link to="/AddExpenseToAJob">Add Expense to a Job</Link>

    </div>
  );
}
