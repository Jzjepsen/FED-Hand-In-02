import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/Model.css'; // Import Model.css

export function Model() {
  return (
    <div className="container">
      <h2 className="model-header">Model page</h2>
      <Link className="button-shared button-shared-primary" to="/ListOfJobs">
        Go to List of Jobs
      </Link>
      <Link className="button-shared button-shared-primary" to="/AddExpenseToAJob">
        Add Expense to a Job
      </Link>
    </div>
  );
}
